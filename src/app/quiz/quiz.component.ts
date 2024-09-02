import { Component , Input } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonNameComponent } from "../pokemon-name/pokemon-name.component";


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [PokemonComponent, PokemonNameComponent],
  templateUrl: './quiz.component.html',
  
})
export class QuizComponent {
  @Input() onClick: (() => void) | undefined;

  quiz1 = 1;
  quiz2 = 1;
  quiz3 = 1;
  quiz4 = 1;
  answer = 1;
  correct = '';

  ngOnInit() {
    this.restQuiz();
  }

  restQuiz() {
    const shuffledArray = this.shuffleArray([...Array(151).keys()].map(i => i + 1));
    this.quiz1 = shuffledArray[0];
    this.quiz2 = shuffledArray[1];
    this.quiz3 = shuffledArray[2];
    this.quiz4 = shuffledArray[3];
    const randomCorrect = Math.floor(Math.random() * 4);
    this.answer = shuffledArray[randomCorrect];
    this.correct = '';
  }

  answerClick(number: number) {
    if (number === this.answer) {
      this.correct = 'ゲット！';
    } else {
      this.correct = '逃げられた...';
    }
  }

  shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }


  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
