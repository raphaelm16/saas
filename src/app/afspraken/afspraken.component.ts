import { Component } from '@angular/core';
import { AfsprakenlijstComponent } from './afsprakenlijst/afsprakenlijst.component';
import { AfsprakenfilterComponent } from './afsprakenfilter/afsprakenfilter.component';

@Component({
  selector: 'app-afspraken',
  standalone: true,
  imports: [AfsprakenlijstComponent, AfsprakenfilterComponent],
  templateUrl: './afspraken.component.html',
  styleUrl: './afspraken.component.css'
})
export class AfsprakenComponent {

}
