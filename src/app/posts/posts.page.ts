import { Component, OnInit } from '@angular/core';
import { Posts } from './posts.models';
import { PostsService } from './posts-service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: Posts[]
  post: Posts
  aux: any
  private index: number = 0;
  private readonly offset: number = 15;

  constructor(private postsService: PostsService) { }

  async ngOnInit() {
    let array = await this.postsService.getPosts();
    this.aux = array;
    this.posts = this.aux.slice(this.index, this.offset + this.index);
    this.index += this.offset;
  }

  loadData(event) {
    setTimeout(() => {
      let newPosts = this.aux.slice(this.index, this.offset + this.index);
      this.index += this.offset;
      for (let i = 0; i < newPosts.length; i++) {
        this.posts.push(newPosts[i]);
      }
      console.log('Done');
      event.target.complete();
      if (this.posts.length == this.aux.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

}