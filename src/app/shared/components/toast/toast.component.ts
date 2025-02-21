import { Component } from '@angular/core';

@Component({
    selector: 'app-toast',
    template: ` <p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />`,
})
export class ToastComponent {}
