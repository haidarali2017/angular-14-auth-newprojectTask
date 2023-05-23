
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import {PostService} from '../services/post.service';
import { postFetchAPISuccess, invokePostAPI } from '../store/post.action';
import {selectPost} from '../store/post.selector';

@Injectable()
export class PostEffect {

    constructor(
        private actions$: Actions,
        private postService: PostService,
        private store: Store
      ) {}

    loadAllPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokePostAPI),
      withLatestFrom(this.store.pipe(select(selectPost))),
      mergeMap(([, postformStore]) => {
        if (postformStore.length > 0) {
          return EMPTY;
        }
        return this.postService
          .get()
          .pipe(map((data) => postFetchAPISuccess({ allPost: data })));
      })
    )
  );
}