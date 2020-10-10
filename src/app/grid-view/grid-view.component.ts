import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit, OnDestroy {

  columns:number;
  @Input() tiles:any
  @Input() tile_type:string

  constructor() { }

  ngOnInit(): void { 
  }

  ngOnDestroy(): void{
  }

}
