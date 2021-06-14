import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  public selectedView:any = 1;

  constructor() { }

  ngOnInit(): void {
  }
  public changeView(selectedValue:any) {
    this.selectedView = selectedValue    
  }

}
