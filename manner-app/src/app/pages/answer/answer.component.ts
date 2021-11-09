import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  constructor(
    public quizService:QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  nextPage() {
    this.quizService.nextPage()
  }
  resultPage(){
    this.router.navigate(['result'])
  }

}
