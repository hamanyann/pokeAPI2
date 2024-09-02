import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNameComponent } from './pokemon-name.component';

describe('PokemonNameComponent', () => {
  let component: PokemonNameComponent;
  let fixture: ComponentFixture<PokemonNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
