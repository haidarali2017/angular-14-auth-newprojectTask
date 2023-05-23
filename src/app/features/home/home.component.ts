import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {invokePostAPI} from '../store/post.action';
import {selectPost} from '../store/post.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }
  post$=this.store.pipe(select(selectPost));

  ngOnInit(): void {
    this.store.dispatch(invokePostAPI());
    // console.log(post$);
  }

}
