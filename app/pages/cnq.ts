/**
 * @copyright 2016 kinggolfapps, Larry King.
 */

import { NavController } from 'ionic-angular';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cnq',
    template:`
        <ion-header>
            <ion-navbar class="navbad" swipe-back-enabled="true">
                <ion-title class="navtad">{{ ttt | async }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content class="icviewa">
            <div class="cnqchamps" style="margin-top:100px;"></div>
            <div class="hg4" style="margin-top:20px;">2015 Conquistador Champions</div>
            <div class="hg4" style="margin-top:10px;">Hoyt Holmes & Cameron Webster</div>
        </ion-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CnqPage {

    constructor(private nav: NavController) {
        this.nav = nav;
    }
    
}
