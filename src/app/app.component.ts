import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AfsprakenComponent } from './afspraken/afspraken.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, SidebarComponent, AfsprakenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebar: boolean = true;

  handleSidebarEvent(value : boolean){
  this.isSidebar = value
  }
}
