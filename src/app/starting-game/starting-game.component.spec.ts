import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingGameComponent } from './starting-game.component';

describe('StartingGameComponent', () => {
  let component: StartingGameComponent;
  let fixture: ComponentFixture<StartingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartingGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
