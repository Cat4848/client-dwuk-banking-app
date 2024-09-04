export default function numberToStringWithDecimals(
  number: number,
  decimals: number
): string {
  return number.toFixed(decimals);
}
