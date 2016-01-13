import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: 'hello_input.html'
})

export class AppComponent {
	// Declaring the variable for binding with initial value
	yourname: string = '';
}