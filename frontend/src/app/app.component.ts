import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  data: string = '';

  constructor(private http: HttpClient) {}

  fetchData() {
      this.http.get('http://localhost:8080/hello', { responseType: 'text' })
          .subscribe(response => this.data = response);
  }
}

