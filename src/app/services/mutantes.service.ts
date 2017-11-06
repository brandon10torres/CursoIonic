import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

@Injectable()
export class MutantesService {

  mutantes:any[] =[];

  constructor(private http:Http) {
    console.log("Servicio mutantes listo");
    this.cargar_mutantes();
  }

  cargar_mutantes(){
    this.http.get("assets/data/mutantes.json")
      .subscribe(respuesta => {
        console.log(respuesta);
        let data = respuesta.json();
        console.log(data);
        this.mutantes = data.mutantes;
      })
  }
}
