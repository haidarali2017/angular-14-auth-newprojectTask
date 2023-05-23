import { createAction, props } from '@ngrx/store';
import { Post } from '../store/post';

export const invokePostAPI = createAction(
    '[Post API] Invoke Post Fetch API'
  );
   
  export const postFetchAPISuccess = createAction(
    '[Post API] Fetch API Success',
    props<{ allPost: Post[] }>()
  );