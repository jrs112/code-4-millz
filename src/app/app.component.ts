import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserLoginPage } from '../pages/user-login/user-login';
import { UserRegisterTypePage } from "../pages/user-register-type/user-register-type";
import { UserRegisterAuthInfoPage } from "../pages/user-register-auth-info/user-register-auth-info";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UserRegisterAuthInfoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
