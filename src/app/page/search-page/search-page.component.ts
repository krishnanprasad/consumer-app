import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  name = '';
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
  searchtext = '';
  listofrecipe = ['r1', 'r1', 'r1'];
  constructor(private formBuilder: FormBuilder) {}
  listofsearchaname = [
    { name: 'Krishnan', id: 1 },
    { name: 'Dhivya', id: 2 },
    { name: 'Vihaan', id: 3 },
    { name: 'Prasad', id: 4 },
    { name: 'Girija', id: 5 },
    { name: 'Krishnan Aarthi', id: 6 },
  ];
  ngOnInit(): void {}
  onkeypress(e: any) {
    // this.filterByValue();
  }
  filterByValue() {
    var value = 'name';
    var centers = this.listofsearchaname.filter((o: any) =>
      o[value].toLowerCase().includes(this.searchtext.toLowerCase())
    );
    console.log(centers);
    console.log(this.listofsearchaname);
  }
}
