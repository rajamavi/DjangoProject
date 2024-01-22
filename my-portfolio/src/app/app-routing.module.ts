// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: '**', redirectTo: '' } // Redirect to home if the route doesn't match
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
