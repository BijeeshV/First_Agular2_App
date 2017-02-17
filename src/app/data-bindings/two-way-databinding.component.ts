import { Component} from '@angular/core';

@Component({
  selector: 'fa-two-way-databinding',
  template: `
   <br/><br/>
    <input type="tesxt" [(ngModel)]="person.name"/>
    <input type="tesxt" [(ngModel)]="person.name"/>
    <br/><br/>
  `,
  styles: []
})
export class TwoWayDatabindingComponent  {

 person={
   name:"max",
   age:27
 }
}
