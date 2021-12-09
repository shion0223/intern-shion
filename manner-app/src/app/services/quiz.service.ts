import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Choice, Quiz, QUIZ_DATA } from '../const/quiz';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es
import { NgLocaleLocalization } from '@angular/common';

const QUIZ_COUNT = 3;

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _questionCount: number = 0;
  private _answerCount: number = 0;
  private _selectedChoice!: Choice;
  private _quizzes!: Quiz[];
  private _isQuizzing: boolean = false;
  private _quiz!: Quiz; //クイズデータを入れる変数
  public makingProblem!: Quiz[]; //間違えた問題を入れる配列
  constructor(private router: Router) {}

  initialize(): void {
    this._quizzes = [];
    this._questionCount = 0;
    this._answerCount = 0;
    this._isQuizzing = false;
    this.makingProblem = [];
  }

  start(): void {
    this._quizzes = _.sampleSize(QUIZ_DATA, QUIZ_COUNT);
    this._questionCount = 1;
    this._answerCount = 0;
    this._isQuizzing = true;
    this.makingProblem = [];
  }

  getQuiz(): Quiz {
    const quiz = this._quizzes[this.questionCount - 1];
    this._quiz = quiz; //quizにクイズのデータを入れる
    return quiz;
    // return QUIZ_DATA[0];
  }

  setCurrentQuiz(): void {
    this._quiz = this._quizzes[this.questionCount - 1]; //quizにクイズのデータを入れる
    // return QUIZ_DATA[0];
  }

  checkAnswer(choice: Choice): void {
    this._selectedChoice = choice;
    if (choice.isAnswer) {
      ++this._answerCount;
    } else {
      // 不正解だった場合の処理
      // this.setResult();
    }

    ++this._questionCount;
  }

  nextPage(): void {
    if (this.questionCount <= this._quizzes.length) {
      this.router.navigate(['question']);
    } else {
      this.router.navigate(['result']);
    }
  }

  // 正答率を計算する関数
  findCorrectAnswerRate(): number {
    let correctAnswerRate: number = 0; //正答率を入れる変数
    const division = this.answerCount / (this.questionCount - 1);
    const multiplication = division * 100;
    correctAnswerRate = Math.floor(multiplication);
    return correctAnswerRate;
  }

  // 間違えた問題をローカルストレージに保存
  saveIncorrectAnswers(): void {
    // makingProblemの変数名を変える
    localStorage.setItem('making_problem', JSON.stringify(this.makingProblem));
  }

  addIncorrectAnswer(): void {
    if (this.selectedChoice.isAnswer) {
      return;
    }
    this.makingProblem.push(this.quiz);
    console.log(this.makingProblem);
  }

  // 間違えた問題を出題
  startReviewQuiz(): void {
    const storedResult = localStorage.getItem('making_problem') ?? '';
    console.log('storedResult', JSON.parse(storedResult));
    this._quizzes = _.sampleSize(JSON.parse(storedResult), QUIZ_COUNT);
    this._questionCount = 1;
    this._answerCount = 0;
    this._isQuizzing = true;
    this.router.navigate(['question']);
    this.makingProblem = [];
  }

  get questionCount(): number {
    return this._questionCount;
  }
  get answerCount(): number {
    return this._answerCount;
  }
  get isQuizzing(): boolean {
    return this._isQuizzing;
  }

  get quiz(): Quiz {
    // const storedQuiz = localStorage.getItem('quiz');
    // const quiz = {}; // 初期値
    // if (storedQuiz) {
    //   quiz = JSON.parse(storedQuiz || '');
    // }
    // this._quiz = quiz;
    return this._quiz;
  }

  // set quiz(param): void {
  //   localStorage.setItem('quiz', JSON.stringify(param));
  //   this._quiz = param;
  // }

  get selectedChoice(): Choice {
    return this._selectedChoice;
  }
}
