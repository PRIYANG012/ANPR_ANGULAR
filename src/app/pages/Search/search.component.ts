import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-search", 
  templateUrl: "search.component.html"
})
export class searchComponent implements OnInit {
  founddata=true;
  nofounddata=false;

  constructor() {}

  ngOnInit() {
   

  }

  changestate(){
    this.founddata=false;
  this.nofounddata=true;

  }
 
}
