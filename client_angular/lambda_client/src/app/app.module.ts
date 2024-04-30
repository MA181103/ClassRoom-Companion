import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeveloperhubComponent } from './components/developerhub/developerhub.component';
import {AgGridModule} from "ag-grid-angular";
import { FineTuneComponent } from './components/fine-tune/fine-tune.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatbotComponent,
    PortfolioComponent,
    DeveloperhubComponent,
    FineTuneComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatButtonModule,
        FormsModule,
        AgGridModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatCheckboxModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
