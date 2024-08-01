// app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  book = "48 Laws of Power";

  // Function to update the value of book with newBook
  updateBook(newBook: string) {
    // console.log("updateBook in parent component");
    // Update the value of book with newBook
    this.book = newBook;
  }
}
