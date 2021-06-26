export class Content {
  content_id!: string;
  title!:string;
  author?:string;
  author_designation?:string;
  date_of_creation?:string;
  date_of_modify?:string;
  content_data!:string;
  fk_section_id!:string;
  fk_chapter_id!:string;
}
