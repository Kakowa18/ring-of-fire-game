import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {
  MatDialogTitle,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [  
    MatDialogTitle,
    MatDialogModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})


export class DialogAddPlayerComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
