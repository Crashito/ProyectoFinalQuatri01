import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input() Direccion: string;
  @Input() Email: string;
  @Input() Telefono: number;

  ngOnInit(): void {
  }

}
