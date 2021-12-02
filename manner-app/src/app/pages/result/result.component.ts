import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  correctAnswerRate: number = 0;
  answerCount: number = 0;
  questionCount: number = 0;

  constructor(public quizService: QuizService) {}

  ngOnInit(): void {
    this.correctAnswerRate = this.quizService.findCorrectAnswerRate(); //result画面が開かれた時にfindCorrectAnswerRate関数が実行される
    this.answerCount = this.quizService.answerCount;
    this.questionCount = this.quizService.questionCount;
  }

  review(test: any) {
    console.log('test');
    this.quizService.startReviewQuiz();
  }
}
