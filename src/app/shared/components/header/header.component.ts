import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '@app/shared/services/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    languages: any[] | undefined;

    selectedLanguage!: any;
    constructor(
        private translate: TranslateService,
        private toast: ToastService,
        public router: Router,
    ) {}
    ngOnInit(): void {
        this.languages = [
            { name: 'France', code: 'FR' },
            { name: 'English', code: 'EN' },
        ];
        const defaultLang = this.translate.getLangs();
        this.selectedLanguage = this.languages.find(
            (lang: any) => lang.code.toLocaleLowerCase() === defaultLang[0],
        );
    }

    changeLanguage(lange: string): void {
        this.translate.use(lange.toLocaleLowerCase());
    }
}
