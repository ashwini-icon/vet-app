import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from 'src/app/Models/Content';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './contents-dialog.component.html',
  styleUrls: ['./contents-dialog.component.css']
})
export class ContentsDialogComponent implements OnInit {
  dataSource : any = [];
  displayedColumns: string[] = ['position', 'title', 'author' ];

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
      source.push({content_id:content.content_id, position:index+1, title:content.title, author:content.author })
    });
    this.dataSource = source;
    console.log(source);
  }

  contentClicked(row:any) {
    this.dialogRef.close();
  }

}
