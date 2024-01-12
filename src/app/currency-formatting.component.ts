import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-currency-formatting',
  templateUrl: './currency-formatting.component.html',
  imports: [CurrencyPipe],
})
export class CurrencyFormattingComponent {
  amount = 42.50;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/