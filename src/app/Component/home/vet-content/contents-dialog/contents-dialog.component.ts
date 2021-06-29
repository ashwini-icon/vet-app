import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from 'src/app/Models/Content';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-content-dialog',
  templateUrl: './contents-dialog.component.html',
  styleUrls: ['./contents-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContentsDialogComponent implements OnInit {
  dataSource : any = [];
  columnsToDisplay: string[] = ['Position', 'Title', 'Author' ];
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  constructor(
    public dialogRef: MatDialogRef<ContentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createDataSourceArray();
    }

  ngOnInit(): void {
  }

  addData() {

  }
  createDataSourceArray() {
    var source: any[] = []
    this.data.contents.forEach((content: Content, index: number) => {
      source.push({content_id:content.content_id, Position:index+1, Title:content.title, Author:content.author, content_data: content.content_data})
    });
    const rows: any = [];
    //source.forEach(element => rows.push(element, { detailRow: true, element }));
    this.dataSource = source;
    console.log(rows);
  }

  contentClicked(row:any) {
  }

}
