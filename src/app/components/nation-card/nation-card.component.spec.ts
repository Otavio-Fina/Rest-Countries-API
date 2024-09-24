import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationCardComponent } from './nation-card.component';

describe('NationCardComponent', () => {
  let component: NationCardComponent;
  let fixture: ComponentFixture<NationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
