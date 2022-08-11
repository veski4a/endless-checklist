/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromOrder Starting index of the item.
 * @param toOrder Index to which the item should be moved.
 */
export function changeOrderInArray<T = any>(
  array: T[],
  fromOrder: number,
  toOrder: number
): void {
  // TODO: interface instead of any
  // TODO: Get max order value
  const from = clamp(fromOrder, array.length - 1);
  const to = clamp(toOrder, array.length - 1);

  if (from === to) {
    return;
  }

  const target = array[from];
  const delta = to < from ? -1 : 1;

  // change the order
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }

  array[to] = target;
}

/**
 * Clamps a number between zero and a maximum.
 */
function clamp(value: number, max: number): number {
  return Math.max(0, Math.min(max, value));
}
