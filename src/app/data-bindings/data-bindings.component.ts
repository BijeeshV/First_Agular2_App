import { Component } from '@angular/core';

@Component({
  selector: 'fa-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent {

stringInterpolation="This is a string interpolation!";
numberInterpolation=3;
isBorderText()
{
  return true;
}
onClicked(value:string){
  alert(value)
}
}
