import { NgModule } from '@angular/core';
import {MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatTableModule,MatSortModule,MatPaginatorModule,MatOptionModule,MatSelectModule],
    exports: [MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatTableModule,MatSortModule,MatPaginatorModule,MatOptionModule,MatSelectModule]
})

export class  MaterialModule{

}