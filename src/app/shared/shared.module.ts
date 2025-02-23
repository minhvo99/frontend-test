// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastComponent } from './components/toast/toast.component';
import { StyleClassModule } from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { LoadingComponent } from './components/loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './components/button/button.component';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';

const imports = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    TranslateModule,
    StyleClassModule,
    MenubarModule,
    BadgeModule,
    DropdownModule,
    ProgressSpinnerModule,
    AngularSvgIconModule,
    CalendarModule,
    EditorModule,
    FileUploadModule
];

const declarations = [
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    LoadingComponent,
    ButtonComponent,
];

@NgModule({
    imports: [
        ...imports,
      
    ],
    declarations: [...declarations],
    exports: [...imports, ...declarations],
})
export class SharedModule {}
