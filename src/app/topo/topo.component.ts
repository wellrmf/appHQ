import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
@ViewChild('menu') el:ElementRef;
@HostListener("window:scroll", [])
onWindowScroll(){
    if (window.pageYOffset >= 258) {
      this.el.nativeElement.classList = ['menu fixed'];
    } else {
      this.el.nativeElement.classList = ['menu'];
    }
 
}
  constructor() { }

  ngOnInit() {
  
  }


 

}
