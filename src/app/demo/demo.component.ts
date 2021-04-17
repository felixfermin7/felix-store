import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'felix-store';
  items = ['felix', 'jose', 'fermin'];
  power = 10;

  addItem(): void {
    this.items.push('new item');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
