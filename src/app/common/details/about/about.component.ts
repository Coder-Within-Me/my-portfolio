import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StylingService } from '../../../service/styling.service';
import { SkillsComponent } from '../../skills/skills.component';
import { CardComponent } from '../../card/card.component';
import { ToolsUsedComponent } from '../../tools-used/tools-used.component';
import { CommonModule } from '@angular/common';

export interface Skill{
  skillname : string;
  img : string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, SkillsComponent,CardComponent,ToolsUsedComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  stylingService = inject(StylingService);

  faCheckCircle = faCheckCircle;

  currentColor: string = '';

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }

  skillTitles: string[] = ['Frontend','Backend','Database/DevOps/Cloud'];

  getSkillsByTitle(title: string) {
    switch (title) {
      case 'Frontend':
        return this.frontendSkills;
      case 'Backend':
        return this.backendSkills;
      case 'Database/DevOps/Cloud':
        return this.databaseSkills;
      default:
        return [];
    }
  }

  frontendSkills: Skill[] = [
    { skillname: 'Angular', img: 'assets/skills/Angular.png' },
    { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
    { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
    { skillname: 'jQuery', img: 'assets/skills/jQuery.png' },
    { skillname: 'HTML', img: 'assets/skills/html.png' },
    { skillname: 'CSS', img: 'assets/skills/css.png' },
    { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
    { skillname: 'Material UI', img: 'assets/skills/material ui.png' },
    { skillname: 'Tailwind CSS', img: 'assets/skills/tailwind css.png' },
    { skillname: 'DevExtreme', img: 'assets/skills/devextreme.png' },
    { skillname: 'NgXs', img: 'assets/skills/ngxs.png' },
    { skillname: 'NgRx', img: 'assets/skills/ngrx.png' },
    { skillname: 'Micro-frontend', img: 'assets/skills/ui-design.png' },
];

backendSkills: Skill[] = [
  { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
  { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
  { skillname: '.Net MVC', img: 'assets/skills/Visual Studio.png' },
  { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
  { skillname: 'LinQ', img: 'assets/skills/linq.png' },
  { skillname: 'ADO.Net', img: 'assets/skills/visual-studio.png' },
  { skillname: 'Windows Forms', img: 'assets/skills/forms.png' },
  { skillname: 'Microservices', img: 'assets/skills/microservice.png' },
  { skillname: 'Telerik', img: 'assets/skills/telerik.png' },
  { skillname: 'Open XML', img: 'assets/skills/xml.png' },
];

  databaseSkills: Skill[] = [
    { skillname: 'MS SQL', img: 'assets/skills/database.png' },
    { skillname: 'Microsoft Azure', img: 'assets/skills/azure.png' },
    { skillname: 'Docker', img: 'assets/tools/docker.png' },
    { skillname: 'Github', img: 'assets/skills/github.png' },
    { skillname: 'Azure DevOps Portal', img: 'assets/tools/Azure Devops.png' },
  ];
}
