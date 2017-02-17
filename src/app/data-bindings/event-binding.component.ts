import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
   <button (click)="onClicked()">Click Me !!</button>
  `,
  styles: []
})
export class EventBindingComponent {
@Output() clicked=new EventEmitter<string>();
 onClicked(){
   alert("You Clicked Me");
   this.clicked.emit("Custom Event Binding")
 }

}
