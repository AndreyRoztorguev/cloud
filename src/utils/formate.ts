function integer(input: number | string, options?: Intl.NumberFormatOptions): string {
  try {
    const value = Number(input);
    return new Intl.NumberFormat("us-US", {
      style: "decimal",
      maximumFractionDigits: 0,
      minimumFractionDigits: 1,
      ...options,
    }).format(value);
  } catch (err) {
    console.log(err);
    return input as string;
  }
}

function float(input: number | string, options?: Intl.NumberFormatOptions): string {
  try {
    const value = Number(input);
    return new Intl.NumberFormat("us-US", {
      style: "decimal",
      notation: "compact",
      roundingMode: "floor",
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 3,
      signDisplay: value > 1000 ? "always" : "never",
      ...options,
    }).format(value);
  } catch (err) {
    console.log(err);
    return input as string;
  }
}

function floor(input: number, divisor: number = 1): number {
  return Math.floor(input / divisor) * divisor;
}

const format = {
  int: integer,
  float: float,
  floor,
};

export { format };
