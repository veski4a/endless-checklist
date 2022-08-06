/**
 * Interface describing an item in a checklist
 */
export class CheckListItemModel {
  // Order of the item in the list
  order?: number;
  // Item id
  id: string;
  // Item value
  value: string;
  // Wheter the items is checked or not
  checkedOff?: boolean;
  // Group that the item belongs to
  // group?: string;
}

/**
 * A class representing a single checklist
 */
export class ChecklistModel {
  // Checklist id
  public id: string;
  // Title of the list
  public title: string;
  // Detailed description
  public description: string;
  // Items in the list for the user to check off
  public items: CheckListItemModel[];
}
