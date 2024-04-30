import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatbotComponent} from "./components/chatbot/chatbot.component";
import {DeveloperhubComponent} from "./components/developerhub/developerhub.component";
import {FineTuneComponent} from "./components/fine-tune/fine-tune.component";


const routes: Routes = [
  { path: 'chatbot', component: ChatbotComponent},
  { path: 'hub',component:DeveloperhubComponent},
  { path: 'add-prompt',component:FineTuneComponent},

  { path: '', redirectTo: 'chatbot', pathMatch: 'full' }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
