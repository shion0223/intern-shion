import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Comments, TOP_COMMENT_DATA } from 'src/app/const/top-comments';
import * as _ from 'lodash-es'; // https://www.npmjs.com/package/lodash-es

import { Chart, ChartDataset, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  public comment!: string;
  public dateData!: string[];
  public questionCountData!: number[];
  public inCorrectAnswerData!: number[];

  @ViewChild('canvas')
  ref?: ElementRef;

  context?: CanvasRenderingContext2D;
  chart?: Chart;

  constructor(public quizService: QuizService, private router: Router) {}

  ngAfterViewInit() {
    this.context = this.ref?.nativeElement.getContext('2d');
  }

  ngOnInit(): void {
    this.quizService.initialize();
    // const comments = _.sampleSize(TOP_COMMENT_DATA);
    //_.sampleSizeは複数の値をランダムに取り出す場合に使う
    //値を１つだけランダムに取得する場合はMath.randomのほうがいい
    this.comment =
      TOP_COMMENT_DATA[
        Math.floor(Math.random() * TOP_COMMENT_DATA.length)
      ].comment;

    this.quizService.getGraphData();
    this.dateData = this.quizService.dateData;
    this.questionCountData = this.quizService.questionCountData;
    this.inCorrectAnswerData = this.quizService.inCorrectAnswerCountData;

    //グラフの表示
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.dateData,
        datasets: [
          {
            label: '正解数',
            type: 'line',
            fill: false,
            data: this.inCorrectAnswerData,
            borderColor: 'rgb(154, 162, 235)',
            yAxisID: 'y-axis-1',
          },
          {
            label: '問題数',
            type: 'line',
            fill: false,
            data: this.questionCountData,
            borderColor: 'rgb(54, 162, 235)',
            yAxisID: 'y-axis-1',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
          },
        },
      },
    });
  }

  startQuiz() {
    this.quizService.start();
    this.router.navigate(['question']);
  }
}
