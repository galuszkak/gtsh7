
import { Platform, ionicBootstrap, Nav } from 'ionic-angular';
import { Component, ViewChild } from "@angular/core";
import { StatusBar } from 'ionic-native';
import { TrnPage } from './pages/trn';

@Component({
    template:`
        <ion-nav [root]="rootPage"></ion-nav>
    `
})

class MyApp {
    rootPage: any;
    // @ViewChild(Nav) nav: Nav;

    constructor(private platform: Platform) {
        this.rootPage = TrnPage;
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // this.nav.setRoot(TrnPage);
            if (StatusBar) StatusBar.styleLightContent();
        });
    }
}

ionicBootstrap(MyApp);
