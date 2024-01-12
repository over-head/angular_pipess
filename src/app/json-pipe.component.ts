import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-json-pipe',
  template: `{{ data | json }}`,
  imports: [JsonPipe],
})
export class JsonPipeComponent {
  data = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
    }
  };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/