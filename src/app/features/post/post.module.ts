import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import {postReducer} from '../store/post.reducer';
import {PostEffect} from '../store/post.effect';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('mypost', postReducer),
    EffectsModule.forFeature([PostEffect])
   
  ]
})
export class PostModule { }
