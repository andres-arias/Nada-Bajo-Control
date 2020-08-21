import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
    window.onresize = () => this.isMobile = window.innerWidth < 768;
  }

}
