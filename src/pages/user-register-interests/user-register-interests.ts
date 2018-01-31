import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {UserRegisterAboutPage } from "../user-register-about/user-register-about";
import { UserRegisterFinalPage } from "../user-register-final/user-register-final";
import { RegisterService } from "../../services/register.service";

@IonicPage()
@Component({
  selector: 'page-user-register-interests',
  templateUrl: 'user-register-interests.html',
})
export class UserRegisterInterestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RegisterService, public viewCtrl: ViewController) {
  }



  aboutPage = UserRegisterAboutPage;
  allTagsArr = ["Liberal", "Conservative", "Moderate", "Activism", "Transit", "Feminism", "Civil Rights", "Town Hall", "Net Neutrality", "Taxes", "Voting Rights", "Inequality", "Income Gap", "Socialism", "Libertarism", "Affordable Housing", "Healthcare", "Obesity", "Mental Health", "Entitlements", "Police", "Privacy", "Internet Connectivity", "Nutrition", "Social Media", "Grassroots", "Small Business"];
  firstColArr = [];
  secondColArr = [];
  thirdColArr = [];
  searchArr = [];
  myInput = "";
  selectedInterestArr = this.registerService.getUserTags();
  isFinal = this.navParams.get("final");


  ionViewDidLoad() {
    for (var i = 0; i < 9; i = i + 3) {
      this.firstColArr.push(this.allTagsArr[i]);
      if(this.allTagsArr[i + 1]) {
        this.secondColArr.push(this.allTagsArr[i + 1]);
      }
      if(this.allTagsArr[i + 2]) {
        this.thirdColArr.push(this.allTagsArr[i + 2]);
      }
    }

  }
  ionViewWillEnter() {
    if(this.navParams.get("noBack"))
        this.viewCtrl.showBackButton(false);
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

  setSearchItems() {
    this.searchArr = [];
    for (var i = 9; i < this.allTagsArr.length; i++) {
      this.searchArr.push(this.allTagsArr[i]);
    }
    for(var j = 0; j < this.selectedInterestArr.length; j++) {
      this.searchArr = this.searchArr.filter((index) => index != this.selectedInterestArr[j]);
    }
  }

  onInput(event) {
    console.log("Got Input");
    let val = event.target.value;
    console.log(event.target.value);
    if (val != undefined) {
    this.setSearchItems();
    }
    if (val && val.trim() !== '') {
      this.searchArr = this.searchArr.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  onCancel() {
    this.searchArr = [];
    console.log("GOT CANCEL");
  }
  onBlur() {
    setTimeout(() => {this.searchArr = []}, 0);
    this.myInput = "";
  }

  addSearchTag(tag) {
    for (var i = 0; i < this.selectedInterestArr.length; i++) {
      if (tag == this.selectedInterestArr[i]) {
        var newSelectArray = this.selectedInterestArr.filter((index) => index != tag);
        this.selectedInterestArr = newSelectArray;
        return;
      }
    }
    this.selectedInterestArr.push(tag);
    this.searchArr=[];
  }

  swipeRightEvent() {
    if (this.selectedInterestArr.length > 0) {
      this.registerService.addUserTags(this.selectedInterestArr);
      if(this.isFinal === true) {
      this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
      } else {
      this.navCtrl.push(UserRegisterAboutPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
      }
    }
  }

  skipTags() {
    if(this.isFinal === true) {
    this.navCtrl.push(UserRegisterFinalPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
    } else {
    this.navCtrl.push(UserRegisterAboutPage, {}, {animate: true, animation: "ios-transition", direction: "forward", duration: 1000, });
    }
  }

}
