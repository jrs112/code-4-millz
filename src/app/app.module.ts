import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { UserLoginPage } from '../pages/user-login/user-login';
import { UserRegisterAboutPage } from "../pages/user-register-about/user-register-about";
import { UserRegisterAuthInfoPage } from "../pages/user-register-auth-info/user-register-auth-info";
import { UserRegisterDistrictPage } from "../pages/user-register-district/user-register-district";
import { UserRegisterFinalPage } from"../pages/user-register-final/user-register-final";
import { UserRegisterInterestsPage } from "../pages/user-register-interests/user-register-interests";
import { UserRegisterTypePage } from "../pages/user-register-type/user-register-type";

@NgModule({
  declarations: [
    MyApp,
    UserLoginPage,
    UserRegisterAboutPage,
    UserRegisterAuthInfoPage,
    UserRegisterDistrictPage,
    UserRegisterFinalPage,
    UserRegisterInterestsPage,
    UserRegisterTypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLoginPage,
    UserRegisterAboutPage,
    UserRegisterAuthInfoPage,
    UserRegisterDistrictPage,
    UserRegisterFinalPage,
    UserRegisterInterestsPage,
    UserRegisterTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
