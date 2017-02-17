import {
   Component,
   OnInit ,
  OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
Input,
ViewChild,
ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundPara>{{bindable}}</p>
    <p>{{boundPara.textContent}}</p>
    <p>Hai</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('boundPara') boundParagraph:HTMLElement;
  @ContentChild('boundContent') boundContent:HTMLElement;
       @Input() bindable=1000;
  constructor() { }
  ngOnChanges(){
      this.log("OnChanges")
  }
  ngOnInit() {
this.log("OnInit")
  }
 ngDoCheck(){
    this.log("DoCheck")
  }
  ngAfterContentInit() {
this.log("AfterContentInit")


  }
  ngAfterContentChecked(){
    this.log("AfterContentChecked")
    console.log(this.boundContent);
  }
  ngAfterViewInit() {
this.log("AfterViewInit")

  }
  ngAfterViewChecked(){
    this.log("AfterViewChecked")
    console.log(this.boundParagraph);
  }
  ngOnDestroy() {
this.log("OnDestroy")
  }
  private log(hook:string){
    console.log(hook);
  }
}
