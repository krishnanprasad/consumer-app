import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToasterEventTypes } from 'src/app/modal/toaster-event-types';
import { CommonServiceService } from 'src/services/common-service.service';
import { ToastService } from 'src/services/ui/toast.service';

@Component({
  selector: 'app-admin-add-chef',
  templateUrl: './admin-add-chef.component.html',
  styleUrls: ['./admin-add-chef.component.css'],
})
export class AdminAddChefComponent implements OnInit {
  ToasterEventTypes = ToasterEventTypes;
  email: any;
  showpassword = false;
  password: any;
  addChefAccountForm: any;
  constructor(
    private fb: FormBuilder,
    private _CommonService: CommonServiceService,
    private toast: ToastService
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
        if (response == true) {
          this.addChefAccountForm.reset();
          this.toast.showSuccessToast(
            'Created',
            'Account has been created successfully'
          );
        }
      });
  }
  // showToast(type: ToasterEventTypes) {
  //   switch (type) {
  //     case ToasterEventTypes.Success:
  //       this.toast.showSuccessToast(
  //         'Success toast title',
  //         'This is a success toast message.'
  //       );
  //       break;
  //     case ToasterEventTypes.Warning:
  //       this.toast.showWarningToast(
  //         'Warning toast title',
  //         'This is a warning toast message.'
  //       );
  //       break;
  //     case ToasterEventTypes.Error:
  //       this.toast.showErrorToast(
  //         'Error toast title',
  //         'This is an error toast message.'
  //       );
  //       break;
  //     default:
  //       this.toast.showInfoToast(
  //         'Info toast title',
  //         'This is an info toast message.'
  //       );
  //       break;
  //   }
  // }
  changed(evt: any) {
    this.showpassword = evt.target.checked;
  }
}
