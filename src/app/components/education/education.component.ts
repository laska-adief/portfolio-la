import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    this.portfolioService.getDataDB().subscribe({
      next: (res: any) => {
        if (res?.educations?.length) {
          this.educations = res.educations;
          this.educations.reverse();
          console.log(this.educations);
        }
      },
      error: (err: Error) => console.log(err),
    });
  }
}
