import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pipe-component',
	standalone: false,
	templateUrl: './pipe-component.component.html',
	styleUrl: './pipe-component.component.scss',
})
export class PipeComponentComponent implements OnInit {
	public userName: string = 'Rajeev Kumar';

	constructor() {

	}
	
	ngOnInit(): void {

	}

}
