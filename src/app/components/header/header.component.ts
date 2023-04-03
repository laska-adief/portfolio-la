import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() selectionTheme = new EventEmitter();
  constructor() {}

  faBars = faBars;
  faTimes = faTimes;
  faSun = faSun;
  faMoon = faMoon;
  isMenuOpen: boolean = false;
  isDarkTheme: boolean = true;

  ngOnInit(): void {}

  onClickMenuIcon() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.selectionTheme.emit(this.isDarkTheme);
  }
}
