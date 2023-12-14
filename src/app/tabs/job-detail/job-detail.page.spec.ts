import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDetailPage } from './job-detail.page';

describe('JobDetailPage', () => {
  let component: JobDetailPage;
  let fixture: ComponentFixture<JobDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JobDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
