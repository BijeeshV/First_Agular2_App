import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
    <article>
      another Works!
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    article{
      color:green;
      border:  1px solid black;
    }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
