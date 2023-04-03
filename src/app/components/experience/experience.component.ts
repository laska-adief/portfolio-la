import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences() {
    this.portfolioService.getDataDB().subscribe({
      next: (res: any) => {
        if (res?.jobs?.length) {
          this.experiences = res.jobs;
          this.experiences.reverse();
          console.log(this.experiences);
        }
      },
      error: (err: Error) => console.log(err),
    });
  }
}
