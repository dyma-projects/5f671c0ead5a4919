import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public title:string ='exercice1';

  constructor() { }

  ngOnInit(): void {
  }

  // property binding
  getGreen(): object{
    return {color: "green"};
  }
  // property binding
  getRed(): object{
    return {color: "red"};
  }

  // event binding
  onClick(){
    console.log('je click');
  }
}
