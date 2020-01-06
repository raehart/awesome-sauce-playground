import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-kaia',
  templateUrl: './kaia.component.html',
  styleUrls: ['./kaia.component.scss']
})
export class KaiaComponent {

  constructor(private apollo: Apollo) { }


}
