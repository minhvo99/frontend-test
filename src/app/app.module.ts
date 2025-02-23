import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    provideHttpClient,
    withInterceptorsFromDi,
    withFetch,
    HttpClient,
} from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CustomTranslateLoaderFactory } from './../app/shared/services/CustomLoader'


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        NgbModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: CustomTranslateLoaderFactory,
                deps: [HttpClient],
            },
            defaultLanguage: 'en',
        }),
        AngularSvgIconModule.forRoot(),
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
        MessageService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
