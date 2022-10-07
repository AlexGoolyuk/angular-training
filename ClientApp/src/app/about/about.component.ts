import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  count: number = 0;
  name: string = 'Tom';

  constructor() { }

  ngOnInit(): void {
  }


  increase(): void {
    this.count++;
  }
}
