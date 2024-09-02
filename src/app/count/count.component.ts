import { Component, Input } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './count.component.html',
})
export class CountComponent {
  @Input() onClick: (() => void) | undefined;

  count = 1;

  increment(amount: number) {
    this.count += amount;
  }
  decrement(amount: number) {
    this.count -= amount;
  }

  handleClick() {
    if (this.onClick) {
      this.onClick();
    }
  }
}
