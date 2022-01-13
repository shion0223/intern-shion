import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() text?: string;
  @Output() btnClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
