// child.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input({required: true}) book = "";

  @Output() newBook = new EventEmitter<string>();

  changeBook() {
    // console.log("updateBook in child component");
    
    // Emit an $event
    this.newBook.emit("Book changed");
  }
}
