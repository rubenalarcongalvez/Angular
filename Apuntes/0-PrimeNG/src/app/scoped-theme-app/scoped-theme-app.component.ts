import { Component } from '@angular/core';

@Component({
  selector: 'app-scoped-theme-app',
  templateUrl: './scoped-theme-app.component.html',
  styleUrls: ['./scoped-theme-app.component.scss'],
  styles: [
    `
        :host ::ng-deep .p-panel-header {
            background-color: var(--teal-500);
            border-color: var(--teal-500);
            color: #ffffff;
        }

        :host ::ng-deep .p-panel-content {
            border-color: var(--teal-500);
        }
    `
  ],
})
export class ScopedThemeAppComponent {

}
