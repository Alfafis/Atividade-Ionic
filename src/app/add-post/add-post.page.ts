import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  constructor() { }

  form = {
    userId: '',
    id: '',
    title: '',
    body: ''
  }

  ngOnInit() {
  }

  AddPost(form) {
    console.log(form.value);
  }

}
