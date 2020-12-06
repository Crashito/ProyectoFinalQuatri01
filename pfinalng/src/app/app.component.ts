//Angular imports
import { Component, OnInit } from '@angular/core';
//Services imports
import { MainhnavbarMenuService } from './services/core/mainhnavbar-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private menuSvc:MainhnavbarMenuService){

  }
  title = 'pfinalng';
  NavBarHItems:any[] = [];

  ngOnInit(){
    this.getData();

  }

  getData(){
    this.menuSvc.getItemsHnavbar().subscribe((data : any) => {
      this.NavBarHItems = data;
    });
  }
}
