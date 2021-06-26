import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from "src/app/Models/Content";
import { Section } from "src/app/Models/Section";
import { ContentsDialogComponent } from "../contents-dialog/contents-dialog.component";

@Component({
  selector: 'sections-dialog',
  templateUrl: 'sections-dialog.component.html',
  styleUrls: ['../vet-content.component.css'],
})
export class SectionsDialogContentComponent {
  dataSource : any = [];
  displayedColumns: string[] = ['position', 'section', 'contents' ];

  constructor( public dialog: MatDialog,
    public dialogRef: MatDialogRef<SectionsDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createDataSourceArray();
    }

  addData() {

  }
  createDataSourceArray() {
    var source: any[] = []
    this.data.sections.forEach((section: Section, index: number) => {
      let contentsForSections = this.data.contents?.filter((content: Content) => content.fk_section_id = section.section_id);
      source.push({section_id:section.section_id, position:index+1, section:section.section_name, contents:contentsForSections?.length })
    });
    this.dataSource = source;
    console.log(source);
  }

  sectionClicked(section:any) {
    let data = {section:section, contents:this.data.contents?.filter((content: Content) => content.fk_section_id = section.section_id)};
    this.openDialog(data);
  }

  openDialog(data:any) {
    const dialogRef = this.dialog.open(ContentsDialogComponent,{ width: '50%', data:data});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
