import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  name = 'Sheldon sabe ingles de todos modos';
  string = 'A MoDO DE DeciR lo QUE ES Verdad';
  currentDate = new Date();
  anHourAgo = Date.now() - (1000*60*60); 
  seisHourAgo = Date.now() - (1000*60*60*6); 
  doceHourAgo = Date.now() - (1000*60*60*12); 
  diaAgo = Date.now() - (1000*60*60*24); 
  dosAgo = Date.now() - (1000*60*60*48); 
  mesAgo = Date.now() - (1000*60*60*60*12);
  mesesAgo = Date.now() - (1000*60*60*60*30);

  numberOne = 2;
  numberTwo = 10;
  
} 





