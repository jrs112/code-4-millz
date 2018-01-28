import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserRegisterDistrictPage } from "../user-register-district/user-register-district";
import { RegisterService } from "../../services/register.service";

@IonicPage()
@Component({
  selector: 'page-user-register-about',
  templateUrl: 'user-register-about.html',
})
export class UserRegisterAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterAboutPage');
  }

  swipeRightEvent(e, form) {
    if (form.valid) {
      this.registerService.addUserInfo(form.value.userName, form.value.userAbout);
      this.navCtrl.push(UserRegisterDistrictPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
    }
  }

}
