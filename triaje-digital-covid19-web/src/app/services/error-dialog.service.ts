import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../shared/error-dialog/error-dialog.component';
import {Router} from '@angular/router';

@Injectable()
export class ErrorDialogService {

  width = '30%';

  constructor(public dialog: MatDialog, private router: Router) {
  }

  openDialog(data): void {
    if (navigator.userAgent.includes('Mobile')) {
      this.width = '80%';
    }
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: this.width,
      data: data
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/inicio']);
    });
  }
}
