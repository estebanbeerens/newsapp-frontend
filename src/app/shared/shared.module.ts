import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SharedSpinnerComponent } from 'src/app/shared/components/shared-spinner/shared-spinner.component';
import { SharedToolbarComponent } from 'src/app/shared/components/shared-toolbar/shared-toolbar.component';

@NgModule({
  declarations: [
    SharedSpinnerComponent,
    SharedToolbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    SharedSpinnerComponent,
    SharedToolbarComponent
  ]
})
export class SharedModule { }
