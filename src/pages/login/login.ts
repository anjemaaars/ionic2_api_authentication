import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ToastController, MenuController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import {Http} from '@angular/http';
import { Authservice } from '../../providers/authservice';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Authservice]
})
export class LoginPage {
  private login_cred: FormGroup;
  public data;
  registerCredentials = { username: '', password: '' };
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder, public toastCtrl: ToastController, private alertCtrl: AlertController,
              public menuCtrl: MenuController, private auth: Authservice, public http:Http) {
    // if (this.auth.checkLocal() == true) {
    //     setTimeout(() => {
    //       this.navCtrl.setRoot(DashboardPage);  
    //     });
    // }
      this.menuCtrl.enable(false, 'sidemenu');
      this.login_cred = this.formBuilder.group({
        username: [''],
        password: ['']
      });
    
        this.data = {};
        this.data.username = '';
        this.data.response = '';

        this.http = http;
  }

  setLogin() {
    
    console.log(this.auth.login(this.data));
      // .subscribe(allowed => {
      // if (allowed) {
      //     setTimeout(() => {
      //       this.navCtrl.setRoot(HomePage);
      //     });
      //   } else {
      //     let toast = this.toastCtrl.create({
      //       message: 'Login Failed. Credentials did not match',
      //       duration: 3000,
      //       cssClass: "toast-login-failed"
      //     });
      //     toast.present();
      //   }
      // }
    // );
  }
}
