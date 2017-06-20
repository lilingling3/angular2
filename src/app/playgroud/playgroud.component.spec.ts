import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroudComponent } from './playgroud.component';

describe('PlaygroudComponent', () => {
  let component: PlaygroudComponent;
  let fixture: ComponentFixture<PlaygroudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
