import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero[] = [
	{ id: 11, name: 'Superman' },
	{ id: 12, name: 'Batman' },
	{ id: 13, name: 'Narco' },
	{ id: 14, name: 'Rubberman' },
	{ id: 15, name: 'Finn' },
	{ id: 16, name: 'Jake' },
	{ id: 17, name: 'Maxwel Smart' },
	{ id: 18, name: 'Sledge Hammer' },
	{ id: 19, name: 'Jaime' },
	{ id: 20, name: 'Birdman' }
];

@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<h2>My Heroes</h2>
  	<ul class="heroes">
  	  <li *ngFor="let hero of heroes">
  	    <!-- each hero goes here -->
  	    <span class="badge">{{hero.id}}</span> {{hero.name}}
  	  </li>
  	</ul>
  	`
})

export class AppComponent { 
	title = 'Tour of Heroes';
	heroes = HEROES;
}

