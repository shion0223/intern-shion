import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Comments, TOP_COMMENT_DATA } from 'src/app/const/top-comments';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  public comment!: string;

  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.initialize();
    // const comments = _.sampleSize(TOP_COMMENT_DATA);
    //_.sampleSizeは複数の値をランダムに取り出す場合に使う
    //値を１つだけランダムに取得する場合はMath.randomのほうがいい
    this.comment =
      TOP_COMMENT_DATA[
        Math.floor(Math.random() * TOP_COMMENT_DATA.length)
      ].comment;
  }

  startQuiz() {
    this.quizService.start();
    this.router.navigate(['question']);
  }
}
