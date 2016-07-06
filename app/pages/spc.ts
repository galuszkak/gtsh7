/**
 * @copyright 2016 kinggolfapps, Larry King.
 */

import { NavController } from 'ionic-angular';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'spc',
    template: `
        <ion-header>
            <ion-navbar class="navbad" swipe-back-enabled="true">
                <ion-title class="navtad">Sp Pts Cup</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content class="icview">
            <div ion-item class="cusitem" style="background-color:#0b2db5; text-align:center; border-color: #000000;">
                <a href="http://www.miniofcamarillo.com/" class="mini1">presented by<br>MINI OF CAMARILLO</a>
            </div>        
            <div class="cusitemc">Loading SPC ...</div>
        </ion-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpcPage {

    constructor(private nav: NavController) {
        this.nav = nav;
    }


}
