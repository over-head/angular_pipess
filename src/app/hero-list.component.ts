// Only used in deprecated `pipes.md`
// The `assets/heroes.json` file is only used in this `HeroListComponent`

import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { FetchJsonPipe } from './fetch-json.pipe';

@Component({
  standalone: true,
  selector: 'app-hero-list',
  template: `
    <h2>Heroes from JSON File</h2>

    <div *ngFor="let hero of ('assets/heroes.json' | fetch) ">
      {{hero.name}}
    </div>

    <p>Heroes as JSON:
      {{'assets/heroes.json' | fetch | json}}
    </p>`,
  imports: [CommonModule, FetchJsonPipe, JsonPipe]
})
export class HeroListComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/