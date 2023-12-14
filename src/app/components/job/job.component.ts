import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmark } from 'ionicons/icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  standalone: true,
  imports: [IonCard, IonList, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonThumbnail, IonText]
})
export class JobComponent  implements OnInit {

  @Input() job: any;

  constructor() { 
    addIcons({ bookmark });
  }

  ngOnInit() {}

}
