import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-events-selected',
  templateUrl: 'events-selected.html',
})
export class EventsSelectedPage {
  eventInfo = {
    OrganizationUserName: this.navParams.get("OrganizationUserName"),
    DisplayTitle: this.navParams.get("DisplayTitle"),
    Description: this.navParams.get("Description"),
    CategoryName:this.navParams.get("CategoryName"),
    StartTime: this.navParams.get("StartTime"),
    EndTime: this.navParams.get("EndTime"),
    AddressDisplayName: this.navParams.get("AddressDisplayName"),
    StreetAddressOne: this.navParams.get("StreetAddressOne"),
    StreetAddressTwo: this.navParams.get("StreetAddressTwo"),
    City: this.navParams.get("City"),
    State: this.navParams.get("State"),
    Zip: this.navParams.get("Zip"),
    Tags: this.navParams.get("Tags"),
    ImageUrl: this.navParams.get("ImageUrl")
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("DisplayTitle"))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsSelectedPage');
    console.log(this.eventInfo);
  }

}
