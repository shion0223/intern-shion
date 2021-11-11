import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Choice, Quiz, QUIZ_DATA } from '../const/quiz';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es



const QUIZ_COUNT = 3;

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private _questionCount: number = 0;
  private _answerCount: number = 0;
  private _selectedChoice!: Choice ;
  private _quizzes: any;
  private _isQuizzing: boolean = false;
  private _quiz!: Quiz;　//クイズデータを入れる変数
  


  constructor(
    private router: Router
  ) { }

  initQuiz(): void {
    this._quizzes = null;
    this._questionCount = 0;
    this._answerCount = 0;
    this._isQuizzing = false;
  }

  startQuiz(): void {
    this._quizzes = _.sampleSize(QUIZ_DATA, QUIZ_COUNT);
    this._questionCount = 1;
    this._answerCount = 0;
    this._isQuizzing = true;
    this.router.navigate(['question']);
  }

  getQuiz(): Quiz {
    this._quiz = this._quizzes[this.questionCount - 1]; //quizにクイズのデータを入れるを入れる
    return this._quizzes[this.questionCount - 1];
    // return QUIZ_DATA[0];
  }

  checkAnswer(choice: Choice): void {
    this._selectedChoice = choice;
    if (choice.isAnswer) ++this._answerCount;

    ++this._questionCount;
  }


  nextPage(): void {
    if (this.questionCount <= QUIZ_COUNT) {
      this.router.navigate(['question']);
    } else {
      this.router.navigate(['result']);
    }
  }

  // 正答率を計算する関数
  findCorrectAnswerRate(): number{
    let correctAnswerRate: number = 0; //正答率を入れる変数
    const division = this.answerCount / (this.questionCount-1);
    const multiplication = division * 100;
    correctAnswerRate = Math.floor( multiplication ) ;
    return correctAnswerRate;
  }

  get questionCount(): number{
    return this._questionCount;
  }
  get answerCount(): number{
    return this._answerCount;
  }
  get isQuizzing(): boolean{
    return this._isQuizzing;
  }

  get quiz(): Quiz{
    return this._quiz;
  }

  get selectedChoice(): Choice{
    return this._selectedChoice;
  }

}
