import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ml-10 mt-2">
      <div class="flex flex-col items-center text-xl">{{pokemonName}}</div>
      <div class="flex flex-col  ">HP：{{ pokemonStatus[0] }}</div>
      <div class="flex flex-col  ">攻撃：{{ pokemonStatus[1] }}</div>
      <div class="flex flex-col  ">防御：{{ pokemonStatus[2] }}</div>
      <div class="flex flex-col  ">特攻：{{ pokemonStatus[3] }}</div>
      <div class="flex flex-col  ">特防：{{ pokemonStatus[4] }}</div>
      <div class="flex flex-col  ">素早：{{ pokemonStatus[5] }}</div>
    </div>
  `,
})
export class PokemonStatusComponent {
  @Input() count = 1;
  pokemonName: string | null = null;
  pokemonStatus: number[] = [];
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

      this.pokemonStatus = data.stats.map((stat:{base_stat: number}) => stat.base_stat);
      this.pokemonName = data.name;
    } catch (error) {
      this.pokemonName = null;
    } finally {
      this.loading = false;
    }
  }
}
