
import { createFeatureSelector } from '@ngrx/store';
import {Post} from '../store/post';
export const selectPost = createFeatureSelector<Post[]>('mypost');

