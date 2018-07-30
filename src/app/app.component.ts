import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casa do caralho';
  seila = 'tanto faz'


ngOnInit() {
	console.log(this.title);
}
}