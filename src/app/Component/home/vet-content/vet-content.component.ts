import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { VetcontentService } from 'src/app/services/vetcontent.service';
import { v4 as uuid } from 'uuid';
import { Chapter } from 'src/app/Models/Chapter';
import { Section } from 'src/app/Models/Section';
import { Content } from 'src/app/Models/Content';
import { MatDialog } from '@angular/material/dialog';
import { SectionsDialogContentComponent } from './sections-dialog/sections-dialog.component';

@Component({
  selector: 'app-vet-content',
  templateUrl: './vet-content.component.html',
  styleUrls: ['./vet-content.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VetContentComponent implements OnInit {

  public sec_title:any="";
  public chapter_id:any;
  public subhead_id:any;
  public chapterlist!:[Chapter];
  public htmlContent:any;
  public sectionList:[Section] | undefined;
  public contentList:[Content] | undefined;
  public main_sec_title:any;
  public sub_sec_title:any='';
  dataSource : any = [];
  displayedColumns: string[] = ['position', 'chapter', 'sections', 'contents' ];
  expandedElement: null;
  constructor(private vetcon:VetcontentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vetcon.getAllChapters().subscribe((responseData : any) => {
      if(responseData['error'] == false){
        this.chapterlist = responseData['data'];
        console.log(this.chapterlist);
        this.vetcon.getAllSections().subscribe((responseData : any) => {
          if(responseData['error'] == false){
            this.sectionList = responseData['data'];
            console.log(this.sectionList);
            this.vetcon.getAllContents().subscribe((responseData : any) => {
              if(responseData['error'] == false){
                this.contentList = responseData['data'];
                console.log(this.contentList);
                this.createDataSourceArray();
              }
            });
          }
        });
      }
    });
  }

  addData(){
  }

  removeData(){
  }

  createDataSourceArray() {
    var source: any[] = []
    this.chapterlist.forEach((chapter, index) => {
      let sectionsForChapter = this.sectionList?.filter(section => section.fk_chapter_id = chapter.chapter_id);
      let contentsForChapter = this.contentList?.filter(content => content.fk_chapter_id = chapter.chapter_id);
      source.push({chapter_id:chapter.chapter_id, position:index+1, chapter:chapter.chapter_name, sections:sectionsForChapter?.length, contents:contentsForChapter?.length })
    });
    this.dataSource = source;
    console.log(source);
  }

  chapterClicked(chapter:any){
    let sectionsForChapter = this.sectionList?.filter(section => section.fk_chapter_id = chapter.chapter_id);
    let contentsForChapter = this.contentList?.filter(content => content.fk_chapter_id = chapter.chapter_id);
    let data = {chapter:chapter, sections:sectionsForChapter, contents:contentsForChapter};
    this.openDialog(data);
  }

  openDialog(data:any) {
    const dialogRef = this.dialog.open(SectionsDialogContentComponent,{ width: '50%', data:data});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
