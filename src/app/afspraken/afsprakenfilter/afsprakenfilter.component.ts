import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-afsprakenfilter',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './afsprakenfilter.component.html',
  styleUrl: './afsprakenfilter.component.css'
})
export class AfsprakenfilterComponent {
  isFilterExpanded: boolean = false;

  expandFilter(){
    this.isFilterExpanded = !this.isFilterExpanded;
  }

}
