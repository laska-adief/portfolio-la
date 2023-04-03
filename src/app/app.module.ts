import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectComponent } from './components/projects/project/project.component';
import { JobComponent } from './components/experience/job/job.component';
import { EduComponent } from './components/education/edu/edu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    JobComponent,
    EduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
