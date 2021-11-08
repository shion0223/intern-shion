import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './pages/top/top.component';
import { ButtonComponent } from './components/button/button.component';
import { QuestionComponent } from './pages/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { AnswerComponent } from './pages/answer/answer.component';
import { ResultComponent } from './pages/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ButtonComponent,
    QuestionComponent,
    AnswerComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
