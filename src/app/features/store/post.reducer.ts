import { createReducer,on  } from "@ngrx/store";
import {Post} from '../store/post';
import {postFetchAPISuccess} from '../store/post.action';

export const initialState: ReadonlyArray<Post> = [];
export const postReducer = createReducer(
    initialState,
    on(postFetchAPISuccess, (state, { allPost }) => {
        return allPost;
      })
);