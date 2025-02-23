import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ToastService } from './toast.service';

export class CustomTranslateLoader implements TranslateLoader {
    private URL = 'https://api.test.soa-dev.net/api/v1/pages?lang=';
    constructor(private http: HttpClient, private toast: ToastService) {}

    getTranslation(lang: string): Observable<any> {
        return this.http.get(`${this.URL}${lang}`).pipe(
            map((res: any) => {
                return res[0];
            }),
            catchError(error => {
                this.toast.showError(`Error loading translations: ${error.message}`);
                return of({});
              })
        );  
    }
}

export function CustomTranslateLoaderFactory(http: HttpClient, toast: ToastService): TranslateLoader {
    return new CustomTranslateLoader(http, toast);
}
