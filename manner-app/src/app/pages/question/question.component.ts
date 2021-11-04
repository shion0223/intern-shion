import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/const/quiz';

import { QuizService } from 'src/app/services/quiz.service';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  quizData!:Quiz;

  constructor(
    public quizService:QuizService
  ) { }

  ngOnInit(): void {
    this.quizData = this.quizService.getQuiz();
  }

}
