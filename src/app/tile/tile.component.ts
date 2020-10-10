import { Component, OnInit, Input, } from '@angular/core';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  
  @Input() tile_type:string
  @Input() _id:Number
  @Input() image:string
  @Input() movie:string
  @Input() songs:string[]
  
  songs_button="close"
  constructor() {}

  ngOnInit(): void {
    console.log(typeof(this._id),this._id)
  }

}






