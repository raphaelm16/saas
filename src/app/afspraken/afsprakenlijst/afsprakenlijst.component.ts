import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AfspraakService } from '../../../services&&models/afspraak.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-afsprakenlijst',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor],
  templateUrl: './afsprakenlijst.component.html',
  styleUrl: './afsprakenlijst.component.css'
})
export class AfsprakenlijstComponent implements OnInit{
  
  constructor(public service: AfspraakService){}

  ngOnInit(): void {
    this.service.getAfspraken();
  }

}
