import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  correctAnswerRate: number = 0;
  answerCount: number = 0;
  questionCount: number = 0;

  constructor(public quizService: QuizService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.correctAnswerRate = this.quizService.findCorrectAnswerRate(); //result画面が開かれた時にfindCorrectAnswerRate関数が実行される
    this.answerCount = this.quizService.answerCount;
    this.questionCount = this.quizService.questionCount;
    this.quizService.saveIncorrectAnswers();
  }

  review(test: any) {
    console.log('ここだよ');
    console.log(this.quizService.makingProblem);
    if (!this.quizService.makingProblem.length) {
      const dialogData = {};
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '60vw',
        disableClose: true,
      });
      // dialogRef.afterClosed().subscribe(() => {});
    } else {
      this.quizService.startReviewQuiz();
    }
  }
}
