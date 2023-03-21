export function toTitleCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('The input should be a string');
  }

  if (str.length === 0) {
    return str;
  }

  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}
