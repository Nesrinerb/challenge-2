import { Component } from '@angular/core';

@Component({
  selector: 'app-user-component',
  template: `
  <button (click)="affichage()">{{show?"Afficher hobbies":"Masquer hobbies"}}</button>
  <ng-container *ngIf="visible">
    <div *ngFor= "let hobbie of hobbies; index as i" >
      <div>{{hobbie}}<button (click)="supprime(i)">Supprimer</button></div>
    </div>
  </ng-container>

  

 
  <br>
    <label for="na">Nom:</label>
    <input [(ngModel)]='name' type="text" id="na">
    {{name}} 
    <br>
    <label for="em">Email:</label>
    <input [(ngModel)]='email'  type="text" id="em">
    {{email}}
    <br>

    <label for="ad">Adress:</label>
    <input [(ngModel)]='address' type="text" id="ad">
    {{address}}
  
  `,
  styles: []
})
export class UserComponentComponent {
  name = 'toto';
  email = 'toto@Fivepoints.fr';
  address = 'rue de la bourse lac2';
  hobbies = ['Music', 'Movies', 'Sports'];
  show = true;
  visible = false;

  
  affichage(): void {
    this.show = !this.show;
    this.visible = !this.visible;
  }

  supprime(i:number): void {
    console.log(this.hobbies[i]);
    this.hobbies.splice(i,1);
  }
}
