import { Component } from '@angular/core';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@Component({
  standalone: true,
  selector: 'app-power-booster',
  template: `
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `,
  imports: [ExponentialStrengthPipe]
})
export class PowerBoosterComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/