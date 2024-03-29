// Only used in deprecated `pipes.md`
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';
@Component({
  standalone: true,
  selector: 'app-power-boost-calculator',
  template: `
    <h2>Power Boost Calculator</h2>
    <label for="power-input">Normal power: </label>
    <input id="power-input" type="text" [(ngModel)]="power">
    <label for="boost-input">Boost factor: </label>
    <input id="boost-input" type="text" [(ngModel)]="factor">
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `,
  imports: [ExponentialStrengthPipe, FormsModule],
  styles: ['input {margin: .5rem 0;}']
})
export class PowerBoostCalculatorComponent {
  power = 5;
  factor = 1;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/