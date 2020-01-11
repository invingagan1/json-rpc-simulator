import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';

const Modules = [
    MatToolbarModule
];

@NgModule({
    declarations:[],
    imports:[...Modules],
    exports:[...Modules]
})
export class MaterialModule {}