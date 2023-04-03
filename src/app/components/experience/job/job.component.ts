import { Component, Input, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/interfaces/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  faCircle = faCircle;
  @Input() job!: Job;

  constructor() {}

  ngOnInit(): void {}
}
