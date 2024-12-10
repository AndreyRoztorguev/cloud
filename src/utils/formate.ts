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

function fileSize(sizeInBytes: number, options?: Intl.NumberFormatOptions) {
  if (sizeInBytes >= 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
    // petabytes the max value
    return "Too large";
  }
  const units = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte", "petabyte"];
  const i = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
  const size = sizeInBytes / Math.pow(1024, i);

  return new Intl.NumberFormat("us-US", {
    unit: units[i],
    notation: "standard",
    style: "unit",
    ...options,
  }).format(size);
}

const format = {
  int: integer,
  float,
  floor,
  fileSize,
};

export { format };
