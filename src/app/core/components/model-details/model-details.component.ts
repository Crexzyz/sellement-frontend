import { Component, Input, OnInit } from '@angular/core';
import { DetailsGettable } from '../../interfaces/details-gettable';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {
  @Input()
  dataSource!: DetailsGettable;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
