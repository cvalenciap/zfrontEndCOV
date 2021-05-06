import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ContentDialogComponent} from '../shared/';

@Directive({
  selector: '[openDialog]'
})
export class OpenDialogDirective {
  @Input('openDialog') dialogType: string;
  @Input('dialogSRC') dialogSRC: string;

  @Output() onEvent: EventEmitter<number>;

  constructor(public dialog: MatDialog) {
    this.onEvent = new EventEmitter();
  }

  @HostListener('click')
  onClick(data: any) {
    if (!data) {
      data = {dialogType: this.dialogType, dialogSRC: this.dialogSRC};
    }
    switch (data.dialogType) {
      case 'content':
        const dialogRef = this.dialog.open(ContentDialogComponent, {
          data: data,
          maxWidth: 600,
          disableClose: data.disableClose || false,
        });
        dialogRef.afterClosed().subscribe(result => {
          if (data.onEvent) {
            data.onEvent(result);
          } else {
            this.onEvent.emit(result);
          }
        });
        break;
      default:
        this.dialog.open(ContentDialogComponent, {
          data: this.dialogSRC
        });
        break;
    }
  }
}
