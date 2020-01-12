import {NgModule} from '@angular/core';
import {MatToolbarModule, MatTabsModule, MatButtonModule, MatTreeModule, MatIconModule, MatListModule, MatDivider, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatDialogModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const Modules = [
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatDialogModule
];

@NgModule({
    declarations:[],
    imports:[...Modules],
    exports:[...Modules]
})
export class MaterialModule {}