import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './pages/top/top.component';
import { ButtonComponent } from './components/button/button.component';
import { QuestionComponent } from './pages/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ButtonComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
