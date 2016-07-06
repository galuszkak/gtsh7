/**
 * @copyright 2016 kinggolfapps, Larry King.
 */

import { NavController } from 'ionic-angular';
import { Component } from "@angular/core";
import { SpcPage } from './spc';
import { ManPage } from './man';
import { CnqPage } from './cnq';

@Component({
    selector: 'trn',
    template: `
        <ion-header>
            <ion-navbar class="navbad">
                <ion-title class="navtad">golfTOCS @ SHCC</ion-title>
            </ion-navbar>
        </ion-header>
        <ion-content class="icview">
            <ion-list>
                <button *ngFor="let p of pages" ion-item (click)="vPage(p)" class="cusitem">
                    <ion-avatar [ngClass]="p.lgcl" item-left></ion-avatar>
                    {{p.t1}}<br>{{p.t2}}
                    <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-right></ion-icon>
                </button>
            </ion-list>
        </ion-content>
    `
})

export class TrnPage {
    pages: [any];
    
    constructor(private nav: NavController) {
        this.nav = nav;
        this.pages = [
            { title: 'Sp Pts Cup', t1: 'Spanish', t2:'Points Cup', cmp: SpcPage, trn: 2, lgcl: 'spclogo'},
            { title: 'Manchester', t1: 'Manchester', t2:'', cmp: ManPage, trn: 3, lgcl: 'manlogo' },
            { title: 'Conquistador', t1: 'Conquistador', t2:'', cmp: CnqPage, trn: 4, lgcl: 'cnqlogo' }
        ];

    }

    vPage(page) {
        console.log("In vPage, page.cmp = " + page.cmp);
        this.nav.push(page.cmp);
    }
}