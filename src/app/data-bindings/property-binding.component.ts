import { Component,Input } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    <p>
      {{result}}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent  {

 @Input() result=0;
}
