import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Jhon';
    this.description = 'Is this the real Jhon ?';
    this.createDate = new Date();
    this.snaps = 1230;
    this.imageUrl = 'https://picsum.photos/200/300';
  }

  pickPastelColor(): string {
    var random = Math.random();
    var colorPicker = '';
    if (random > 0 && random < 0.25) {
      colorPicker = '#FADCAD';
    } else if (random > 0.25 && random < 0.5) {
      colorPicker = '#EEB8B8';
    } else if (random > 0.5 && random < 0.75) {
      colorPicker = '#C5DAD1';
    } else if (random > 0.75 && random < 1) {
      colorPicker = '#D5CB8E';
    }
    return 'background: ' + colorPicker + ';';
  }
}
