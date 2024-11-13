import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map, Observable, take } from 'rxjs';
import { Skill } from '../details/about/about.component';

interface Project{
  projectName : string;
  description : string;
  skills : Skill[]
}

@Component({
  selector: 'app-project-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-template.component.html',
  styleUrl: './project-template.component.css'
})
export class ProjectTemplateComponent {

  project: Project[] = [
    {
      projectName: ' State Income Tax (SIT)',
      description: 'This system is designed for US tax calculations, enabling efficient tax management and generating detailed reports.',
      skills: [
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'DevExtreme', img: 'assets/skills/devextreme.png' },
        { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Microsoft Azure', img: 'assets/skills/azure.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ]
    },
    {
      projectName: 'E-file',
      description: 'This essential web application collects tax data from various systems, consolidates it, and synchronizes it with third-party tools for generating US tax forms.',
      skills: [
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
        { skillname: 'NgXs', img: 'assets/skills/ngxs.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Microsoft Azure', img: 'assets/skills/azure.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ]
    },
    {
      projectName: 'Telerik Reporting',
      description: 'This web application streamlines the creation, management, validation, and formatting of custom reports, greatly accelerating the entire reporting process.',
      skills: [
        { skillname: 'Telerik', img: 'assets/skills/telerik.png' },
        { skillname: 'HTML', img: 'assets/skills/html.png' },
        { skillname: 'CSS', img: 'assets/skills/css.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'ADO.Net', img: 'assets/skills/visual-studio.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ]
    },
    {
      projectName: 'MLP Automation',
      description: 'This tool significantly reduces the time and effort required for developers to validate data, create SQL queries, and maintain documentation, transforming tasks that previously took weeks into processes that can be completed in just a few minutes.',
      skills: [
        { skillname: 'Windows Forms', img: 'assets/skills/forms.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net MVC', img: 'assets/skills/Visual Studio.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'Open XML', img: 'assets/skills/xml.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Azure DevOps', img: 'assets/tools/Azure Devops.png' }
      ]
    },
    {
      projectName: 'Deal Management System (DMS)',
      description: 'This DMS application enables users to efficiently create agreements and deals for orderable products.',
      skills: [
        { skillname: '.Net MVC', img: 'assets/skills/Visual Studio.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: 'ADO.Net', img: 'assets/skills/visual-studio.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
        { skillname: 'jQuery', img: 'assets/skills/jQuery.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'TFS', img: 'assets/skills/Visual Studio.png' }
      ]
    },
    {
      projectName: 'Request To Quote (RTQ)',
      description: 'RTQ is a tool designed to streamline the approval process for specific quotes and orders. It facilitates special approvals and efficiently manages data transfers to other applications.',
      skills: [
        { skillname: '.Net MVC', img: 'assets/skills/Visual Studio.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: 'ADO.Net', img: 'assets/skills/visual-studio.png' },
        { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'jQuery', img: 'assets/skills/jQuery.png' },
        { skillname: 'TFS', img: 'assets/skills/Visual Studio.png' }
      ]
    },
    {
      projectName: 'Property Hub (Practice)',
      description: 'This practice project allows users to register, buy, or rent properties. It includes key functionalities such as sign-in, sign-up, and a user-based cart system.',
      skills: [
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
        { skillname: 'JSON Server', img: 'assets/skills/json server.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Github', img: 'assets/skills/github.png' }
      ]
    },
    {
      projectName: 'Excel Processing (Practice)',
      description: 'This WinForms project enables the creation, reading, and writing of Excel sheets using various technologies, including OpenXML, EPPlus, and Interop.',
      skills: [
        { skillname: 'Windows Forms', img: 'assets/skills/forms.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: 'Open XML', img: 'assets/skills/xml.png' },
        { skillname: 'ADO.Net', img: 'assets/skills/visual-studio.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Github', img: 'assets/skills/github.png' }
      ]
    },
    {
      projectName: 'PG Management (Practice)',
      description: 'This practice project manages details of paying guests, including floors, rooms, and beds. It also provides features to track billings and monitor vacancies.',
      skills: [
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Github', img: 'assets/skills/github.png' }
      ]
    },
    {
      projectName: 'Micro-frontend (Practice)',
      description: 'This practice project demonstrates a micro frontend architecture, featuring a host application and two remote projects that function as independent micro frontends.',
      skills: [
        { skillname: 'Angular', img: 'assets/skills/Angular.png' },
        { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
        { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
        { skillname: 'JSON Server', img: 'assets/skills/json server.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Github', img: 'assets/skills/github.png' }
      ]
    },
    {
      projectName: 'JSON Server (Practice)',
      description: 'This JSON server, hosted on Render.com, serves as a web API for practice projects, providing a simple and effective way to simulate backend functionality.',
      skills: [
        { skillname: 'JSON Server', img: 'assets/skills/json server.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Github', img: 'assets/skills/github.png' }
      ]
    },
    {
      projectName: 'CQRS Pattern (Practice)',
      description: 'This practice project implements the CQRS pattern using the MediatR library for microservices, showcasing effective command and query separation in a microservices architecture.',
      skills: [
        { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
        { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
        { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
        { skillname: 'LinQ', img: 'assets/skills/linq.png' },
        { skillname: 'MS SQL', img: 'assets/skills/database.png' },
        { skillname: 'Git', img: 'assets/skills/git.png' },
        { skillname: 'Github', img: 'assets/skills/github.png' }
      ]
    },
    
  ];
  
  projects: Project[] = [];

  ngOnInit(): void {
    this.streamProjects().subscribe(p => {
      this.projects.push(p);
    });
  }

  streamProjects(): Observable<Project> {
    return interval(100).pipe(
      take(this.project.length),
      map(x => this.project[x])
    );
  }
}
