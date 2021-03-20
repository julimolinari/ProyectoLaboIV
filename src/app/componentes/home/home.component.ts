import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public edad1 : number =0;
  public edad2 : number =0;
  public promedio : number =0;
  public mostrar : boolean =false;
  

  public calcularPromedio() : void{
    
    this.promedio =(this.edad1 + this.edad2) / 2;
    this.mostrar =true;  

  }
  public limpiar() : void{
    
    this.edad1=0;
    this.edad2=0;
    this.mostrar =false;  

  }

  constructor() { }

  ngOnInit(): void {
  }

}
