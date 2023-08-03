import { Component, EventEmitter, Output } from '@angular/core';

export type SortParams = {
  attrName: string;
  isDesc: boolean;
};

@Component({
  selector: 'app-bug-sort',
  templateUrl: './bug-sort.component.html',
  styleUrls: ['./bug-sort.component.css']
})
export class BugSortComponent {
  
  sortAttr: string = "id";
  sortDesc: boolean = false;

  @Output()
  sortChange: EventEmitter<SortParams> = new EventEmitter<SortParams>();

  onDataChange() {
    this.sortChange.emit({ attrName: this.sortAttr, isDesc: this.sortDesc })
  }

  onChangeDesc(isDesc: boolean) {
    this.sortDesc = isDesc;
    this.onDataChange()
  }

  onChangeAttr(attrName: string) {
    this.sortAttr = attrName;
    this.onDataChange()
  }
}
