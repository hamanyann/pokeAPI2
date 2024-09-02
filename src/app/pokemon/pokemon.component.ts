import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p
      class="w-[96px] h-[96px] flex items-center justify-center"
      *ngIf="!loading && !pokemon"
    >
      No Pokemon found
    </p>
    <img
      class="w-[96px] h-[96px] flex items-center justify-center"
      *ngIf="pokemon && !loading"
      [src]="pokemon"
    />
    <p
      class="w-[96px] h-[96px] flex items-center justify-center"
      *ngIf="loading"
    >
      Loading...
    </p>
  `,
})
export class PokemonComponent {
  @Input() count = 1;
  pokemon: string | null = null;
  loading: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['count']) {
      this.getPokemonImg();
    }
  }

  async getPokemonImg() {
    this.loading = true;
    const url = `https://pokeapi.co/api/v2/pokemon/${this.count}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.pokemon = data.sprites.front_default;
    } catch (error) {
      this.pokemon = null;
    } finally {
      this.loading = false;
    }
  }
}
