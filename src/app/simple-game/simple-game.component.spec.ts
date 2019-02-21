import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleGameComponent } from './simple-game.component';

describe('SimpleGameComponent', () => {
  let component: SimpleGameComponent;
  let fixture: ComponentFixture<SimpleGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
