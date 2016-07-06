/**
 * @copyright 2016 kinggolfapps, Larry King.
 */

import { NavController } from 'ionic-angular';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'man',
    template:`
        <ion-header>
            <ion-navbar class="navbad" swipe-back-enabled="true">
                <ion-title class="navtad">Manchester</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content class="icview">
            <div class="cusitemc">Loading Man ...</div>
        </ion-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManPage {

    constructor(private nav: NavController) {
        this.nav = nav;
    }

}
