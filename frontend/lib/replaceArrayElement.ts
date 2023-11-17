export function replaceArrayElements<T>(
  arr: T[],
  startIdx: number,
  endIdx: number,
  replacement: T | T[]
): T[] {
  const head: T[] = arr.slice(0, startIdx);

  const replacementArray: T[] = Array.isArray(replacement)
    ? replacement
    : [replacement];

  const tail: T[] = arr.slice(endIdx + 1);

  const resultArray: T[] = [...head, ...replacementArray, ...tail];

  return resultArray;
}
