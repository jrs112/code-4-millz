import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserLoginPage} from "../user-login/user-login";
@IonicPage()
@Component({
  selector: 'page-org-invite-request',
  templateUrl: 'org-invite-request.html',
})
export class OrgInviteRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginPage = UserLoginPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgInviteRequestPage');
  }

  submitOrgInfo(form) {
    var orgInfo = form.value;
    console.log(orgInfo);
  }

}
