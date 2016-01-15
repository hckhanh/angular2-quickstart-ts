import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
	selector: 'hero-detail',
	styleUrls: ['css/styles.css'],
	templateUrl: 'template/hero_detail.html',
	inputs: ['selectedHero']
})

export class HeroDetailComponent {
	public selectedHero: Hero;
}