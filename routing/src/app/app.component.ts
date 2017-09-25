import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template:`
            <P>{{ someProperty }}</P>
           `
})

export class AppComponent {
  // arr = [3, 7, 8, 2, 1];
  constructor(private dataService: DataService) {}
  
  someProperty: string = "";

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }
}


