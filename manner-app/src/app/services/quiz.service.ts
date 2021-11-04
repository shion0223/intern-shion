import { Injectable } from '@angular/core';

import { Choice, Quiz, QUIZ_DATA } from '../const/quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz(): Quiz {
    // return this.quizzes[this.questionCount - 1];
    return QUIZ_DATA[0];
  }

}
