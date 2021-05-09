import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Angular';

  public num1:number=0;
  public num2:number=0;
  public result:number=0;
  public funcao:string="Adição";
  

  ngOnChanges() {
    this.calc();    
  }

  add(){
    this.funcao = "Adição";    
    this.calc();
  }

  sub(){
    this.funcao = "Subtração";
    this.calc();
  }

  mul(){
    this.funcao = "Multiplicação";
    this.calc();
  }

  div(){
    this.funcao = "Divisão";
    this.calc();
  }

  calc(){    
    switch (this.funcao){
      case "Adição":
        this.result=Number(this.num1)+Number(this.num2);
        break;
      case "Subtração":
        this.result=Number(this.num1)-Number(this.num2);
        break;
      case "Multiplicação":
        this.result=Number(this.num1)*Number(this.num2);
        break;
      case "Divisão":
        this.result=Number(this.num1)/Number(this.num2);
        break;                              
    }
  }
}
