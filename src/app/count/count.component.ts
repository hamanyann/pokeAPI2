import { Component, Input } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonStatusComponent } from '../pokemon-status/pokemon-status.component';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [PokemonComponent,PokemonStatusComponent],
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
