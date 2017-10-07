import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase'; 
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {
  userProfile: any = null;
  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) { 
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.userProfile = user;
      } else {
        this.userProfile = null;
      }
    })
  }

  loginUser(): void {
    this.googlePlus.login({
      'webClientId':'223296465079-df1kr53o1dkir3bvpopbium7jca1pcrk.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
            const googleCredential = firebase.auth.GoogleAuthProvider
                .credential(res.idToken);
   
            firebase.auth().signInWithCredential(googleCredential)
          .then( response => {
              console.log("Firebase success: " + JSON.stringify(response));
          });
    }, err => {
        console.error("Error: ", err)
    });
  }

}


