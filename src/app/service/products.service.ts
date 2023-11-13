import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {Product} from "../models/product";
import {environment} from "../../environments/environment";
import {CommentService} from "../catalog/item/comments/comment.service";
import {Comment} from "../catalog/item/comments/comment";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient, private commentService: CommentService) {
    }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.api}/products`).pipe(
            switchMap(products =>
                this.commentService.getAll().pipe(
                    map(comments => {
                        return products.map(p => ({
                            ...p,
                            comments: comments.filter(c => c.productId === p.id),
                        }));
                    })
                )
            )
        );
    }
}
