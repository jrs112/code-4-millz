import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoginPage } from '../user-login/user-login';
import { UserRegisterInterestsPage } from "../user-register-interests/user-register-interests";

/**
 * Generated class for the UserRegisterAuthInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-register-auth-info',
  templateUrl: 'user-register-auth-info.html',
})
export class UserRegisterAuthInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  formValid = false;
  loginPage = UserLoginPage;
  portfolioPic = "../../assets/imgs/default_portfolio.png"


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterAuthInfoPage');
  }
  swipeRightEvent(e, form) {
    if (form.valid) {
      this.navCtrl.push(UserRegisterInterestsPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
    }

  }



}
