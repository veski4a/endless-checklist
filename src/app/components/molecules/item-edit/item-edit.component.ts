import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
/**
 * Component representing the checklist item in edit mode
 */
export class ItemEditComponent implements OnInit {
  // Value to edit
  @Input() value: string = '';
  // Whether the font in the input text area should be large or normal
  @Input() largeInputTextFont: boolean = false;
  // Helper text that is in the empty input text area
  @Input() placeholderText: string = '';
  // Text to appear on the save button
  @Input() saveButtonText: string = 'Save';
  // Whether you can save even if the value entered is empty
  @Input() allowSaveOnEmptyValue: boolean = false;
  // Whether you can save with enter or not
  @Input() useEnterToSave: boolean = true;

  // Whether the value input box should be auto resized based on the text's length
  public valueInputAutoResize: boolean = true;

  // Callback when the user clicks save
  @Output() onSave = new EventEmitter<string>();
  // Callback when the user cancels out of the edit
  @Output() onCancel = new EventEmitter();

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  /**
   * Called when the user clicks the save button
   */
  public save(): void {
    this.onSave.emit(this.value);
    this.value = '';
  }

  /**
   * Called when the user clicks the cancel button
   */
  public cancel(): void {
    this.onCancel.emit();
  }

  /**
   * Getter controlling the save button's disabled property
   */
  public get isSaveDisabled(): boolean {
    if (this.allowSaveOnEmptyValue) return false;

    return this.value.length == 0;
  }

  /**
   * Handles the key down event for the enter button
   */
  public onKeyDownEnter(event: any): void {
    if (!this.useEnterToSave) return;

    // if the shift key is not pressed we submit the input
    // otherwise a new line is added
    if (!event.shiftKey) {
      event.preventDefault();
      this.save();
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.cancel();
    }
  }
}
