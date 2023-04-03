import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.portfolioService.getDataDB().subscribe({
      next: (res: any) => {
        if (res?.projects?.length) {
          this.projects = res.projects;
          console.log(this.projects);
        }
      },
      error: (err: Error) => console.log(err),
    });
  }
}
