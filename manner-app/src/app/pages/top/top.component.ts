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
  public comments!: Comments[];
  public comment!: string;

  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.initialize();
    this.comments = _.sampleSize(TOP_COMMENT_DATA);
    this.comment = this.comments[0].comment;
    console.log(this.comment);
  }

  startQuiz() {
    this.quizService.start();
    this.router.navigate(['question']);
  }
}
