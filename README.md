When upgrading to Ionic2 Beta.10, I came across a navigation problem.

I simplified the app:
1) removed all components and services
2) eliminated @ngrx files and functionality

I am running this app locally with "ionic serve" command.

When the app is loaded there are three tournaments to select (presented from trn.ts):
a) spc.ts
b) man.ts
c) cnq.ts
Selecting anyone of these will transition the nav-bar, but the content does
not transition until the tournament is selected a 2nd time.

Thanks for your time and assistance.
Larry King