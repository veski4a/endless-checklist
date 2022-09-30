import { OrderedItem, reinitItemsOrder } from '../../core-kit/drag-utils';

/**
 * Interface describing an item in a checklist
 */
export class CheckListItemModel implements OrderedItem {
  // Item id
  id: string;
  // Item value
  value: string;
  // Order of the item in the list
  order: number;
  // Wheter the items is checked or not
  checkedOff?: boolean;
  // Group that the item belongs to
  // group?: string;
}

/**
 * A class representing a single checklist
 */
export class ChecklistModel implements OrderedItem {
  // Checklist id
  public id: string;
  // Order of the item in the list
  order: number;
  // Title of the list
  public title: string;
  // Detailed description
  public description: string;
  // Items in the list for the user to check off
  public items: CheckListItemModel[];

  /**
   * Remove an item with index and reorders all other item appropriately
   */
  public removeItem(itemIndex: number): void {
    if (itemIndex < 0 || itemIndex >= this.items.length) return;

    this.items.splice(itemIndex, 1);
    this.reinitItemsOrder();
  }

  private reinitItemsOrder() {
    reinitItemsOrder(this.items);
  }
}
