import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz, Choice } from 'src/app/const/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  quizData!: Quiz;
  questionCount?: number;

  constructor(private router: Router, public quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.setCurrentQuiz();

    const quizData = this.quizService.quiz;
    quizData.choices = _.shuffle(quizData.choices);
    this.quizData = quizData;
    this.questionCount = this.quizService.questionCount;
  }

  chooseAnswer(choice: Choice) {
    this.quizService.checkAnswer(choice);
    this.quizService.addIncorrectAnswer();
    this.router.navigate(['answer']);
  }
}
