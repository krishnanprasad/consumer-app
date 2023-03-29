import { Component, OnInit } from '@angular/core';
import { ToasterEventTypes } from 'src/app/modal/toaster-event-types';
import { ToastService } from 'src/services/ui/toast.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css'],
})
export class AdminHomePageComponent implements OnInit {
  currentsection: any = 'createchefaccount';
  constructor(private toast: ToastService) {}
  ToasterEventTypes = ToasterEventTypes;
  ngOnInit(): void {}
  changesection(section: any) {
    this.currentsection = section;
  }
  showToast(type: ToasterEventTypes) {
    switch (type) {
      case ToasterEventTypes.Success:
        this.toast.showSuccessToast(
          'Success toast title',
          'This is a success toast message.'
        );
        break;
      case ToasterEventTypes.Warning:
        this.toast.showWarningToast(
          'Warning toast title',
          'This is a warning toast message.'
        );
        break;
      case ToasterEventTypes.Error:
        this.toast.showErrorToast(
          'Error toast title',
          'This is an error toast message.'
        );
        break;
      default:
        this.toast.showInfoToast(
          'Info toast title',
          'This is an info toast message.'
        );
        break;
    }
  }
}
