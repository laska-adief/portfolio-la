import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen: boolean = false;

  ngOnInit(): void {}

  onClickMenuIcon() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
