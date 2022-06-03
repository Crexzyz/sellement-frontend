import { Component, Input, OnInit } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';

@Component({
  selector: 'app-button-array',
  templateUrl: './button-array.component.html',
  styleUrls: ['./button-array.component.scss']
})
export class ButtonArrayComponent implements OnInit {
  @Input()
  buttons!: Array<ActionButton>;

  constructor() { }

  ngOnInit(): void {
  }

}
