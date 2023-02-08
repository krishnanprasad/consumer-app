import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  name = 'Angular 6';
  categoryitem = [
    {
      groupname: 'Type',
      items: [
        {
          id: 1,
          name: 'Veg',
          checked: true,
        },
        {
          id: 2,
          name: 'Non Veg',
          checked: true,
        },
        {
          id: 3,
          name: 'Egg',
          checked: true,
        },
      ],
    },
    {
      groupname: 'Cuisine',
      items: [
        {
          id: 1,
          name: 'Indian',
          checked: true,
        },
        {
          id: 2,
          name: 'Japanese',
          checked: true,
        },
        {
          id: 3,
          name: 'American',
          checked: true,
        },
      ],
    },
  ];
  listofrecipe = ['r1', 'r1', 'r1'];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
