import { NgModule } from '@angular/core';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {MatChipsModule} from '@angular/material/chips';

import {MatDialogModule} from '@angular/material/dialog';

import {MatBadgeModule} from '@angular/material/badge';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatRadioModule} from '@angular/material/radio';

import {LayoutModule} from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class MaterialElementsModule {}