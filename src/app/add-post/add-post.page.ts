import { Component, OnInit, Output, Input } from '@angular/core';
import { Posts } from '../posts/posts.models';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.posts)
  }

  @Output() post: Posts

  AddPost(form) {
    console.log(form);
  }

}
