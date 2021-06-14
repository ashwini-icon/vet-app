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
  public chapterlist:any; 
  public sub_sec_title:any=''; 
  constructor(private vetcon:VetcontentService) { }

  ngOnInit(): void {
    this.vetcon.getAllChapter().subscribe((responseData : any) => {
      if(responseData['error'] == false){
        this.chapterlist = responseData['data'];
        console.log(this.chapterlist);
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
    let vetsubhead = {'unique_id':uuid(),'title':this.sub_sec_title,'chapter_id':this.chapterlist[0]['chapter_id']}
    this.vetcon.AddSubContent(vetsubhead).subscribe((responseData: any ) =>{
    if(responseData['error'] == false){
        console.log(responseData['message']);
      }
    });
  }


}
