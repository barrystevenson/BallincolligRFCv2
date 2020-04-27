import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchDetailsInfoPage } from './match-details-info.page';

describe('MatchDetailsInfoPage', () => {
  let component: MatchDetailsInfoPage;
  let fixture: ComponentFixture<MatchDetailsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDetailsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchDetailsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
