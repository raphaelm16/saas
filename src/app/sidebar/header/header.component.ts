import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input()
  isSidebar!: boolean;

}
