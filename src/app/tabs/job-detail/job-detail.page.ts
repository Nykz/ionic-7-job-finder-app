import { IonContent, IonHeader, IonToolbar, IonButtons, IonThumbnail, IonBackButton, IonList, IonItem, IonLabel, IonChip, IonText, IonRow, IonSegment, IonSegmentButton, IonCol, IonFooter, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmark, bookmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonThumbnail, IonBackButton, IonList, IonItem, IonLabel, IonChip, IonText, IonRow, IonSegment, IonSegmentButton, IonCol, IonFooter, IonButton, IonIcon]
})
export class JobDetailPage implements OnInit {

  job: any = {};
  jobs: any[] = [];
  segment_value = 'description';
  bookmark = false;

  constructor(private route: ActivatedRoute) { 
    addIcons({ bookmark, bookmarkOutline });
  }

  ngOnInit() {
    this.jobs = [
      { id: 1, company: 'Technyks LLC', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'ct_dark.png', logo_light: 'ct_light.png', image: 'ux.jpg', description: ['3 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'] },
      { id: 2, company: 'Uber Technologies', location: 'Bangalore', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png', image: 'developer.jpg', description: ['5 or more years of experience needed as a Senior developer in Full Stack. Preference will be given to candidates who have experience designing complex solutions.'] },
      { id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png', image: 'ux2.jpg', description: ['4 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'] },
      { id: 4, company: 'TikTok', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png', image: 'ux1.jpg', description: ['3 or more years of UX design experience. Preference will be given to candidates who have experience designing complex solutions.'] },
    ];

    const id = this.route.snapshot.paramMap.get('id');
    const job = this.jobs.find(x => x.id == id);
    if(job) {
      this.job = job;
    }
  }

  changeSegment(event: any) {
    console.log(event);
    this.segment_value = event.detail.value;
  }

  toggleBookmark() {
    this.bookmark = !this.bookmark;
  }

}
