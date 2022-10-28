import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPlaylistsComponent } from './personal-playlists.component';

describe('PersonalPlaylistsComponent', () => {
  let component: PersonalPlaylistsComponent;
  let fixture: ComponentFixture<PersonalPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPlaylistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
