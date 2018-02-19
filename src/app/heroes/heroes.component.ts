import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-data/mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

import { HeroService } from '../services/hero/hero.service'

@Component({
	selector: 'pzv-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	oneAtATime = true;
	heroes: Hero[];

	constructor(private _heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this._heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

}
