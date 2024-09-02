import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './count/count.component';
import { QuizComponent } from './quiz/quiz.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CountComponent, QuizComponent , CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  showCount = false;
  showQuiz = false;

  handleToggleCount() {
    this.showCount = !this.showCount;
  }

  handleToggleQuiz() {
    this.showQuiz = !this.showQuiz;
  }
}
