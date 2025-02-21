import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

const imports = [CommonModule, SharedModule, HomeRoutingModule];

const declarations = [HomeComponent];

@NgModule({
    declarations: [...declarations],
    imports: [...imports],
    exports: [],
})
export class HomeModule {}
