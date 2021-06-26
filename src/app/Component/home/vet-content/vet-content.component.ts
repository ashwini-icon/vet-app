import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VetcontentService } from 'src/app/services/vetcontent.service';
import { v4 as uuid } from 'uuid';
export type DataFormType = 'chapter' | 'subchapter' | 'main_content';

@Component({
  selector: 'app-vet-content',
  templateUrl: './vet-content.component.html',
  styleUrls: ['./vet-content.component.css']
})
export class VetContentComponent implements OnInit {

  public sec_title:any="";
  editor: DataFormType = 'chapter';
  public chapter_id:any;
  public subhead_id:any; 
  public chapterlist:any;
  public htmlContent:any; 
  public subchapterlist:any; 
  public maincontent:any; 
  public main_sec_title:any; 
  public sub_sec_title:any=''; 
  constructor(private vetcon:VetcontentService,
    private router:Router) { }

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
  ngOnChanges(){

    console.log('Changees Done');
  }

  get showChapterForm() {
    return this.editor === 'chapter';
  }
  get showSubChapterForm() {
    return this.editor === 'subchapter';
  }
  get showMainContentForm() {
    return this.editor === 'main_content';
  }
  
  //sec_title_f = new FormControl('');
  

  sectionForm = new FormGroup({
    sec_title_f : new FormControl('',[Validators.required])
  });

  subchapterForm = new FormGroup({
    sub_sec_title_f : new FormControl('',[Validators.required]),
    chapter_id_f : new FormControl('',[Validators.required])
  });

  mainContentForm = new FormGroup({
    main_sec_title_f : new FormControl('',[Validators.required]),
    subhead_id_f : new FormControl('',[Validators.required]),
    main_content_f : new FormControl('',[Validators.required])
  });

  toggleEditor(type: DataFormType,parentID:any) {
    this.editor = type;
    if(type == 'subchapter'){
      this.chapter_id = parentID;
    }else if(type == 'main_content'){
      this.subhead_id = parentID;
    }
  }
  
  onSubmit() {
    if (this.sectionForm.valid) {
      console.log("Section Form Submitted!");
      this.sectionForm.reset();
      this.vetcon.getAllChapter().subscribe((responseData : any) => {
        if(responseData['error'] == false){
          this.chapterlist = responseData['data'];
          console.log(this.chapterlist);
        }      
      });
    }
    if (this.subchapterForm.valid) {
      console.log("Form Submitted!");
      this.subchapterForm.reset();
      this.vetcon.getAllsubChapter().subscribe((responseData : any) => {
        if(responseData['error'] == false){
          this.subchapterlist = responseData['data'];
          console.log(this.subchapterlist);
        }      
      }); 
    }
    if (this.mainContentForm.valid) {
      console.log("Content Form Submitted!");
      this.mainContentForm.reset();
      this.vetcon.getAllMainContent().subscribe((responseData : any) => {
        if(responseData['error'] == false){
          this.maincontent = responseData['data'];
          console.log(this.maincontent);
        }      
      });     
    }
    
  }

  addsection(){    
    console.log(this.sec_title);
    let vethead = {'unique_id':uuid(),'title':this.sec_title}
    this.vetcon.AddContent(vethead).subscribe((responseData: any ) =>{
    if(responseData['error'] == false){
        console.log(responseData['message']);
        this.router.navigate(['/home']); 
      }
    });
  }

  addsubsection(){    
    console.log(this.sec_title);
    let vetsubhead = {'unique_id':uuid(),'title':this.sub_sec_title,'chapter_id':this.chapter_id}
    this.vetcon.AddSubContent(vetsubhead).subscribe((responseData: any ) =>{
    if(responseData['error'] == false){
        console.log(responseData['message']);
        this.router.navigate(['/home']); 
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
        this.router.navigate(['/home']); 
      }
    });
  }
  newsubhead(fk_subhead_id:any){
    console.log(fk_subhead_id);
    this.subhead_id = fk_subhead_id;
  }
 

}
 