import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, RouterModule, HeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebar: boolean = true;

  @Output()
  sidebarExpandEvent = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isSidebar = !this.isSidebar;
    this.sidebarExpandEvent.emit(this.isSidebar); 
  }
}
