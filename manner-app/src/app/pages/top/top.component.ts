import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.initialize();
  }

  startQuiz(test?: string) {
    console.log(test);
    this.quizService.start();
    this.router.navigate(['question']);
  }
}
