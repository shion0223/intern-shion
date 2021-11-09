import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Choice, Quiz, QUIZ_DATA } from '../const/quiz';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es



const QUIZ_COUNT = 2;

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questionCount: number = 0;
  answerCount: number = 0;
  selectedChoice!: Choice ;
  quizzes: any;
  isQuizzing: boolean = false;
  quiz!: Quiz;


  constructor(
    private router: Router
  ) { }

  initQuiz(): void {
    this.quizzes = null;
    this.questionCount = 0;
    this.answerCount = 0;
    this.isQuizzing = false;
  }

  startQuiz(): void {
    this.quizzes = _.sampleSize(QUIZ_DATA, QUIZ_COUNT);
    this.questionCount = 1;
    this.answerCount = 0;
    this.isQuizzing = true;
    this.router.navigate(['question']);
  }

  getQuiz(): Quiz {
    this.quiz = this.quizzes[this.questionCount - 1]; //quizにクイズのデータを入れる
    return this.quizzes[this.questionCount - 1];
    // return QUIZ_DATA[0];
  }

  checkAnswer(choice: Choice): void {
    this.selectedChoice = choice;
    if (choice.isAnswer) ++this.answerCount;

    ++this.questionCount;
  }

  nextPage(): void {
    if (this.questionCount <= QUIZ_COUNT) {
      this.router.navigate(['question']);
    } else {
      this.router.navigate(['result']);
    }
  }

}
