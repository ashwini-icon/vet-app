import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faFileVideo } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileTextIcon = faFileWord;
  fileVideoIcon = faFileVideo;
  fileCalculatorIcon = faCalculator;
  fileBookMedical = faBookMedical;
  fileNews = faNewspaper;
  filePetHealth = faMedkit;
  fileFavourite = faHeart;
  public selectedView:any = 1;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gotoMenu(menuItem:number){
    switch(menuItem) {
      case 1: this.route.navigate(['/vet-content'])
    }
  }
}

