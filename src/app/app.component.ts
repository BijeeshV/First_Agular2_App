import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <h1>Root Component</h1> 
  <!--     <fa-other></fa-other>
      <fa-another>
        <div>
          <h1>Hello</h1>
          <p> World</p>
        </div>
      </fa-another>
      <fa-another>
        <div>
          <h3>Bye!!!!</h3>
        </div>
      </fa-another>
      <fa-data-bindings></fa-data-bindings>
      -->

      <fa-lifecycle *ngIf="!delete" [bindable]="bindValue">
     <p #boundContent> {{test}}</p>
     
      </fa-lifecycle>
      <hr>
      <button (click)="delete=true">Click To Delete</button>
      <button (click)="test = 'I changed it!'">Click To Change Content</button>
      <button (click)="bindValue=750">Click To Change Binding</button>
  `,
  styles: [`
      h1{
        color:red;
      }
  `]
})
export class AppComponent {
  delete=false;
  test = 'Need to Change';
  bindValue=1000;
}
