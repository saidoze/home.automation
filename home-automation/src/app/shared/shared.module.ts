import { NgModule } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MaterialModule,
        FlexLayoutModule,
    ],
    declarations: [
        HeaderComponent,
    ],
    exports: [
        // Modules
        MaterialModule,
        FlexLayoutModule,

        // Components
        HeaderComponent,
    ]
})
export class SharedModule { }
