import { Component, OnInit } from '@angular/core';
import { VetcontentService } from 'src/app/services/vetcontent.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-vet-content',
  templateUrl: './vet-content.component.html',
  styleUrls: ['./vet-content.component.css']
})
export class VetContentComponent implements OnInit {

  public sec_title:any="";
  public chapter_id:any;
  public subhead_id:any; 
  public chapterlist:any;
  public htmlContent:any; 
  public subchapterlist:any; 
  public maincontent:any; 
  public main_sec_title:any; 
  public sub_sec_title:any=''; 
  constructor(private vetcon:VetcontentService) { }

  ngOnInit(): void {
    this.vetcon.getAllChapter().subscribe((responseData : any) => {
      if(responseData['error'] == false){
        this.chapterlist = responseData['data'];
        console.log(this.chapterlist);
      }      
    });
    this.vetcon.getAllsubChapter().subscribe((responseData : any) => {
      if(responseData['error'] == false){
        this.subchapterlist = responseData['data'];
        console.log(this.subchapterlist);
      }      
    });
    this.vetcon.getAllMainContent().subscribe((responseData : any) => {
      if(responseData['error'] == false){
        this.maincontent = responseData['data'];
        console.log(this.maincontent);
      }      
    });
  }

  

  addsection(){    
    console.log(this.sec_title);
    let vethead = {'unique_id':uuid(),'title':this.sec_title}
    this.vetcon.AddContent(vethead).subscribe((responseData: any ) =>{
    if(responseData['error'] == false){
        console.log(responseData['message']);
      }
    });
  }

  addsubsection(){    
    console.log(this.sec_title);
    let vetsubhead = {'unique_id':uuid(),'title':this.sub_sec_title,'chapter_id':this.chapter_id}
    this.vetcon.AddSubContent(vetsubhead).subscribe((responseData: any ) =>{
    if(responseData['error'] == false){
        console.log(responseData['message']);
      }
    });
  }

  addmaincontent(){    
    
    let vetsubhead = {
    'content_id':uuid(),
    'main_title':this.main_sec_title,
    'author':'',
    'author_designation': '',
    'date_of_creation':'',
    'date_of_modify':'',
    'content_data':this.htmlContent,
    'fk_subhead_id': this.subhead_id
    }
    
    this.vetcon.AddMainContent(vetsubhead).subscribe((responseData: any ) =>{
    if(responseData['error'] == false){
        console.log(responseData['message']);
      }
    });
  }
  newsubhead(fk_subhead_id:any){
    console.log(fk_subhead_id);
    this.subhead_id = fk_subhead_id;
  }
 

}
 