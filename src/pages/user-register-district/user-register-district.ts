import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserRegisterFinalPage } from "../user-register-final/user-register-final";
import { RegisterService } from "../../services/register.service";

@IonicPage()
@Component({
  selector: 'page-user-register-district',
  templateUrl: 'user-register-district.html',
})
export class UserRegisterDistrictPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterDistrictPage');
  }

  swipeRightEvent(e, form) {
    if (form.valid) {
      this.registerService.addUserZip(form.value.userZip);
      this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000 });
    }
  }

}
