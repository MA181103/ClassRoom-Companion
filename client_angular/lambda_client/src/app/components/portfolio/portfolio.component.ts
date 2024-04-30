import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  ticker: string;
  result: any;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:5004/api/analyze', { ticker: this.ticker }).subscribe(
      res => {
        this.result = res;
      },
      err => {
        console.error(err);
      }
    );
  }
}
