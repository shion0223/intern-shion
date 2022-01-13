import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

import {
  ResultComments,
  RESULT_COMMENT_DATA,
} from 'src/app/const/result-comments';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  correctAnswerRate: number = 0;
  answerCount: number = 0;
  questionCount: number = 0;
  comment: string = ''; //シンソツ君のセリフを入れる変数

  constructor(public quizService: QuizService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.correctAnswerRate = this.quizService.findCorrectAnswerRate(); //result画面が開かれた時にfindCorrectAnswerRate関数が実行される
    this.answerCount = this.quizService.answerCount;
    this.questionCount = this.quizService.questionCount;
    this.quizService.saveIncorrectAnswers();

    for (let i = 0; i < RESULT_COMMENT_DATA.length; i++) {
      if (this.correctAnswerRate >= RESULT_COMMENT_DATA[i].statement) {
        this.comment = RESULT_COMMENT_DATA[i].resultComment;
      } else {
        break;
      }
    }
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
