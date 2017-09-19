import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {DrawerMenuLeftComponent} from "./drawer-menu-left/drawer-menu-left.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";
import {HomeComponent} from "./home/home.component";
import {SettingsComponent} from "./settings/settings.component";
import {ProfileComponent} from "./profile/profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AboutUsComponent} from "./settings/about-us/about-us.component";
import {FaqComponent} from "./settings/faq/faq.component";
import {ContactUsComponent} from "./settings/contact-us/contact-us.component";
import {PrivacyComponent} from "./settings/privacy/privacy.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DrawerMenuLeftComponent,
    DashboardComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    FaqComponent,
    ContactUsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
