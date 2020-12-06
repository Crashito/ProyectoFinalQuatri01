import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-hnavbar',
  templateUrl: './hnavbar.component.html',
  styleUrls: ['./hnavbar.component.scss']
})
export class HnavbarComponent implements OnInit {

  @Input() HnavbarItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
