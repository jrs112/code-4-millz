import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserRegisterAboutPage } from "../user-register-about/user-register-about";
import { RegisterService } from "../../services/register.service";

@IonicPage()
@Component({
  selector: 'page-user-register-interests',
  templateUrl: 'user-register-interests.html',
})
export class UserRegisterInterestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService) {
  }



  aboutPage = UserRegisterAboutPage;
  allTagsArr = ["Hornets", "Panthers", "Hurricanes", "Eagles", "Cubs", "Broncos", "Jaguars", "Colts", "Raptors", "Wizards", "Bills", "Browns", "Steelers", "Ravens", "Rams"];
  firstColArr = [];
  secondColArr = [];
  thirdColArr = [];
  selectedInterestArr = [];

  ionViewDidLoad() {
    for (var i = 0; i < this.allTagsArr.length; i = i + 3) {
      this.firstColArr.push(this.allTagsArr[i]);
      if(this.allTagsArr[i + 1]) {
        this.secondColArr.push(this.allTagsArr[i + 1]);
      }
      if(this.allTagsArr[i + 2]) {
        this.thirdColArr.push(this.allTagsArr[i + 2]);
      }
    }
  }

  isActive(tag) {
    for (var i = 0; i < this.selectedInterestArr.length; i++) {
      if (tag == this.selectedInterestArr[i]) {
        return true;
      }
    }
      return false;
  }

  checkIndex(index) {
    if (index == 0) {
      return false;
    } else {
      return true;
    }
  }

  selectTag(tag) {
    for (var i = 0; i < this.selectedInterestArr.length; i++) {
      if (tag == this.selectedInterestArr[i]) {
        var newSelectArray = this.selectedInterestArr.filter((index) => index != tag);
        this.selectedInterestArr = newSelectArray;
        return;
      }
    }
    this.selectedInterestArr.push(tag);
  }

  swipeRightEvent(e) {
    if (this.selectedInterestArr.length > 0) {
      this.registerService.addUserTags(this.selectedInterestArr);
      this.navCtrl.push(UserRegisterAboutPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
    }
  }

}
