import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'berry-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() isCenter = true;

  ngOnInit() {}

  ngOnChanges() {}
}
