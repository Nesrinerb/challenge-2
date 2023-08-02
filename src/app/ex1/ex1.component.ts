import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  template: `

  {{"pour la valeur "+input.value+" le résultat est "+resultat}}
  <input #input type="number">

  <button (click) = "calculeCercle(input.value)">calculer cercle</button>

  <button (click) = "calculeCarre(input.value)">calculer carré</button>
 
  `,
  styles: [

  ]
})
export class Ex1Component {

  public resultat = ""

  calculeCercle(value: any) {
    var c = 3.14 * value * 2
    this.resultat = c.toString()
  }

  calculeCarre(value: any) {
    var c = value * value
    this.resultat = c.toString()
  }

}
