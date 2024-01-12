import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-birthday-pipe-chaining',
  templateUrl: './birthday-pipe-chaining.component.html',
  imports: [DatePipe, UpperCasePipe],
})
export class BirthdayPipeChainingComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/