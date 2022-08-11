export interface OrderedItem {
  order: number;
}

/**
 * Reorders an item in array
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
export function changeOrderInArray(
  array: OrderedItem[],
  fromIndex: number,
  toIndex: number
): void {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);

  if (from === to) {
    return;
  }

  const target = array[from];
  const delta = to < from ? -1 : 1;

  // change the order
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
    array[i].order = i + 1;
  }

  array[to] = target;
  array[to].order = to + 1;
}

/**
 * Clamps a number between zero and a maximum.
 */
function clamp(value: number, max: number): number {
  return Math.max(0, Math.min(max, value));
}
