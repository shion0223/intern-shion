import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './pages/question/question.component';
import { TopComponent } from './pages/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'question', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
