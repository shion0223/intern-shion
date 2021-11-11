import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor(
    public quizService:QuizService
  ) { }

  ngOnInit(): void {
    this.quizService.initQuiz();
  }
  startQuiz() {
    this.quizService.startQuiz();
  }

}
