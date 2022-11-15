import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private service: DemoService) { }

  Movies: string = '';

  ngOnInit(): void {
    console.log("page loaded")
    this.service.getMovieList().subscribe(data => {
      this.Movies = data;
      console.log(this.Movies);
    })
  }

}
