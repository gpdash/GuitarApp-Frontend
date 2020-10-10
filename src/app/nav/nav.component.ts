import { AuthService } from './../auth.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  // this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
  //   this.deviceMd=(result.mqAlias==='lg' || result.mqAlias==='xl' || result.mqAlias==='md')
  // })
}
