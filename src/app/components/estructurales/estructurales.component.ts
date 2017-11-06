import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css']
})
export class EstructuralesComponent implements OnInit {
  existo:boolean=false;
  marcas:string[]=["Nike", "Adidas", "Puma"];
  constructor() { }

  ngOnInit() {
  }

}
