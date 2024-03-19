import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { afsprakenInterface } from '../../../interfaces/afspraken';
import { afsprakenService } from '../../../services/afspraken.service';

@Component({
  selector: 'app-afsprakenlijst',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './afsprakenlijst.component.html',
  styleUrl: './afsprakenlijst.component.css'
})
export class AfsprakenlijstComponent {
  afsprakenlijst: afsprakenInterface[] = [];

  constructor( private afsprakenService: afsprakenService){
    this.afsprakenlijst = this.afsprakenService.getAllAfspraken();
  }

}
