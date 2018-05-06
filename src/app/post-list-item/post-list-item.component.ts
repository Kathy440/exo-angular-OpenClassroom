import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() postsStatus: string;
    @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

  onClik( nb: Number) {
    this.post.loveIts += nb;
  }

}
