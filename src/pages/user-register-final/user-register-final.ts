import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterService } from "../../services/register.service";
import { UserRegisterInterestsPage } from "../user-register-interests/user-register-interests";
import { UserRegisterAboutPage } from "../user-register-about/user-register-about";
import { UserRegisterDistrictPage } from "../user-register-district/user-register-district";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-user-register-final',
  templateUrl: 'user-register-final.html',
})
export class UserRegisterFinalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService:RegisterService) {
  }

  firstTagsArr = [];
  secondTagsArr = []
  thirdTagsArr = [];
  userInfo = this.registerService.getUserInfo();
  userAbout = "";
  success = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegisterFinalPage');
    console.log(this.userInfo);
    this.setTagArrays(this.userInfo.userTags);
  }

  setTagArrays(array) {
    console.log(array);
    this.firstTagsArr = [];
    this.secondTagsArr = [];
    this.thirdTagsArr = [];
    if(array.length < 10) {
      for (var i = 0; i < array.length; i = i + 3) {
        this.firstTagsArr.push(array[i]);
        if(array[i + 1]) {
          this.secondTagsArr.push(array[i + 1]);
        }
        if(array[i + 2]) {
          this.thirdTagsArr.push(array[i + 2]);
        }
      }
    } else {
      for (var i = 0; i < 9; i = i + 3) {
        this.firstTagsArr.push(array[i]);
        if(array[i + 1]) {
          this.secondTagsArr.push(array[i + 1]);
        }
        if(array[i + 2]) {
          this.thirdTagsArr.push(array[i + 2]);
        }
      }
      this.thirdTagsArr.splice(-1, 1, "...")
    }
    console.log(this.firstTagsArr);
    console.log(this.secondTagsArr);
    console.log(this.thirdTagsArr);
  }

  submitAllInfo() {
    console.log("submitting info: ", this.userInfo);
    this.success = true;
    this.navCtrl.push(HomePage, {noBack: true}, {animate: true, animation: "ios-transition", direction: "forward", duration: 5000, })
  }


  backToTags() {
    this.navCtrl.push(UserRegisterInterestsPage, {final: true}, {animate: true, animation: "ios-transition", direction: "back", duration: 1000, });
  }
  backToAbout() {
    this.navCtrl.push(UserRegisterAboutPage, {final: true}, {animate: true, animation: "ios-transition", direction: "back", duration: 1000, });
  }
  backToDistrict() {
    this.navCtrl.push(UserRegisterDistrictPage, {final: true}, {animate: true, animation: "ios-transition", direction: "back", duration: 1000, });
  }



}
