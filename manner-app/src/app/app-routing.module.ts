import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './pages/question/question.component';
import { AnswerComponent } from './pages/answer/answer.component';
import { ResultComponent } from './pages/result/result.component';
import { TopComponent } from './pages/top/top.component';


const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'answer', component: AnswerComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
