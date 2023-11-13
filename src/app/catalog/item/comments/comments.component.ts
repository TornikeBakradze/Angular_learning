import {Component, Input, OnInit} from "@angular/core";
import {CommentService} from "./comment.service";
import {Comment} from "./comment"


@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


    @Input() comments: Comment[] | undefined = void 0;

    // commentNew$ = this.commentService.getAll;

    constructor(private commentService: CommentService) {
    }

    ngOnInit() {
    }

}
