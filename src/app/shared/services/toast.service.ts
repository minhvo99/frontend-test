import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(private messageService: MessageService) {}

    showSuccess(detail: string, summary?: string) {
        summary = summary || 'Success';
        this.messageService.add({
            severity: 'success',
            summary: summary,
            detail: detail,
        });
    }

    showInfo(detail: string, summary?: string) {
        summary = summary || 'Info';
        this.messageService.add({
            severity: 'info',
            summary: summary,
            detail: detail,
        });
    }

    showWarn(detail: string, summary?: string) {
        summary = summary || 'Warn';
        this.messageService.add({
            severity: 'warn',
            summary: summary,
            detail: detail,
        });
    }

    showError(detail: string, summary?: string) {
        summary = summary || 'Error';
        this.messageService.add({
            severity: 'error',
            summary: summary,
            detail: detail,
        });
    }

    showContrast(detail: string, summary?: string) {
        summary = summary || 'Contrast';
        this.messageService.add({
            severity: 'contrast',
            summary: summary,
            detail: detail,
        });
    }

    showSecondary(detail: string, summary?: string) {
        summary = summary || 'Secondary';
        this.messageService.add({
            severity: 'secondary',
            summary: summary,
            detail: detail,
        });
    }
}
