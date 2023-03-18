import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/services/common-service.service';

@Component({
  selector: 'app-admin-add-chef',
  templateUrl: './admin-add-chef.component.html',
  styleUrls: ['./admin-add-chef.component.css'],
})
export class AdminAddChefComponent implements OnInit {
  email: any;
  password: any;
  addChefAccountForm: any;
  constructor(
    private fb: FormBuilder,
    private _CommonService: CommonServiceService
  ) {}

  ngOnInit() {
    this.addChefAccountForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  saveChefAccount() {
    if (!this.addChefAccountForm.valid) {
      alert('Please Fill Details');
      return;
    }

    var chefAccount = this.addChefAccountForm.value;
    this._CommonService
      .CreateChefAccount(chefAccount)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
