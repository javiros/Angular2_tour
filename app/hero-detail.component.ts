import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
	    <h2>{{hero.name}} details!</h2>
	    <div><label>id: </label>{{hero.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name"/>
	      <br />
	      {{hero.name}}'s age is {{hero.age}} 
	      <span *ngIf="hero.age > 50">
	      	...and yup, our hero is getting old....
	      </span>
	    </div>
	  </div>
	`
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}