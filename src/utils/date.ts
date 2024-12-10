function dateFormat(date: number | Date, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("us-US", {
    dateStyle: "short",
    ...options,
  }).format(date);
}

function today() {
  return new Date();
}

function yesterday() {
  return new Date(new Date().setDate(new Date().getDate() - 1));
}

function tomorrow() {
  return new Date(new Date().setDate(new Date().getDate() + 1));
}

const date = {
  today,
  yesterday,
  tomorrow,
};

export { dateFormat, date };
