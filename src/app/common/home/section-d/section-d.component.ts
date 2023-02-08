import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-d',
  templateUrl: './section-d.component.html',
  styleUrls: ['./section-d.component.css']
})
export class SectionDComponent implements OnInit {

  constructor() { }
  listofrecipe = ['r1', 'r1', 'r1'];
  ngOnInit(): void {
  }

}
