import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatusComponent } from './pokemon-status.component';

describe('PokemonStatusComponent', () => {
  let component: PokemonStatusComponent;
  let fixture: ComponentFixture<PokemonStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
