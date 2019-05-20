import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.loveIts--;
    console.log('Not love ' + this.loveIts);
  }

  onLoveIt() {
    this.loveIts++;
    console.log('love ' + this.loveIts);
  }

  getColor() {
    if (this.loveIts > 0) {
      return '#218838';
    } else if (this.loveIts < 0) {
      return '#C82333';
    }
  }

}
