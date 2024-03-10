import { Component } from '@angular/core';
import { AfsprakenlijstComponent } from './afsprakenlijst/afsprakenlijst.component';

@Component({
  selector: 'app-afspraken',
  standalone: true,
  imports: [AfsprakenlijstComponent],
  templateUrl: './afspraken.component.html',
  styleUrl: './afspraken.component.css'
})
export class AfsprakenComponent {

}
