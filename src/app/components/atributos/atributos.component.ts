import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  nombre_alt:string = "Foto perfil";
  url_imagen:string = "assets/img/perfil-candidato.jpg";

  constructor() { }

  ngOnInit() {
  }

}
