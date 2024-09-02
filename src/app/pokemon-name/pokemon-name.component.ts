import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-name',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="flex flex-col items-center">
    <button class="text-3xl border-2 border-black p-2 w-60" *ngIf="!loading">
      {{ pokemon }}
    </button>
    <button class="text-3xl border-2 border-black p-2 w-60" *ngIf="loading" 
    >
      Loading...
    </button>
  </div>`,
})
export class PokemonNameComponent {
  @Input() count = 1;
  pokemon: string | null = null;
  loading: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['count']) {
      this.getPokemon();
    }
  }

  async getPokemon() {
    this.loading = true;
    const url = `https://pokeapi.co/api/v2/pokemon/${this.count}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.pokemon = data.name;
    } catch (error) {
      this.pokemon = null;
    } finally {
      this.loading = false;
    }
  }
}
