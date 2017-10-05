import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
              <div class="container">
                <h1 style="text-align:center; color: #369;">Welcome to {{title}}</h1>
              <h2>MyHeroes</h2>
              <ul class="heroes">
              <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span>{{hero.name}}
              </li>
            </ul>
              <div *ngIf="selectedHero">
                  <h2>{{selectedHero.name}} Details</h2>
                  <div>
                    <label>Id : </label>&nbsp;{{ selectedHero.id }}
                  </div>
                  <div>
                    <label>Name: </label>&nbsp;
                    <input [(ngModel)]="selectedHero.name">
                  </div>
                </div>
              </div>
              `,
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

