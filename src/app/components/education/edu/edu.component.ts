import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/interfaces/education';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.scss'],
})
export class EduComponent implements OnInit {
  @Input() education!: Education;

  constructor() {}

  ngOnInit(): void {}
}
