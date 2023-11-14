import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "./comment.service";
import {Product} from "../../product";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

  @Input() product: Product | null=null;

  comments$=this.commentService.all();

  constructor(private commentService:CommentService) {
  }

  ngOnInit(): void {

  }

}
