import {Component} from 'angular2/core';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	templateUrl: 'template/tour_of_heroes.html'
})

export class AppComponent {
	hero: Hero = {
		id: 1,
		name: 'Khanh'
	}
}