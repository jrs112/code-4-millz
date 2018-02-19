import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the OrgPostEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-org-post-event',
  templateUrl: 'org-post-event.html',
})
export class OrgPostEventPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgPostEventPage');
    this.eventDate = "";
  }

  eventDate;

  selectDate() {
    this.datePicker.show({
  titleText: "Select Event Date",
  date: new Date(),
  mode: 'datetime',
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
}).then(
  date => {
     console.log('Got date: ', date);
     this.eventDate = date;

  },
  err => {
    console.log("Got Error: ", err)
  }
);
  }

}
