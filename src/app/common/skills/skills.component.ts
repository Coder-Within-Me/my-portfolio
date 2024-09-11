import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

export interface Skill{
  skillname : string;
  img : string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = [
    { skillname: 'ADO.Net', img: 'assets/skills/visual-studio.png' },
    { skillname: '.Net MVC', img: 'assets/skills/Visual Studio.png' },
    { skillname: 'Microsoft Azure', img: 'assets/skills/azure.png' },
    { skillname: 'Windows Forms', img: 'assets/skills/forms.png' },
    { skillname: 'Git', img: 'assets/skills/git.png' },
    { skillname: 'Github', img: 'assets/skills/github.png' },
    { skillname: 'TFS', img: 'assets/skills/Visual Studio.png' },
    { skillname: 'Micro-frontend', img: 'assets/skills/ui-design.png' },
    { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
    { skillname: 'JavaScript', img: 'assets/skills/js-file.png' },
    { skillname: 'jQuery', img: 'assets/skills/jQuery.png' },
    { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
    { skillname: 'NgXs', img: 'assets/skills/ngxs.png' },
    { skillname: 'NgRx', img: 'assets/skills/ngrx.png' },
    { skillname: 'Entity Framework', img: 'assets/skills/EF.png' },
    { skillname: 'LinQ', img: 'assets/skills/linq.png' },
    { skillname: 'Microservices', img: 'assets/skills/microservice.png' },
    { skillname: 'Docker', img: 'assets/tools/docker.png' },
    { skillname: 'HTML', img: 'assets/skills/html.png' },
    { skillname: 'CSS', img: 'assets/skills/css.png' },
    { skillname: 'Open XML', img: 'assets/skills/xml.png' },
    { skillname: 'Tailwind CSS', img: 'assets/skills/tailwind css.png' },
    { skillname: 'Material UI', img: 'assets/skills/material ui.png' },
    { skillname: 'DevExtreme', img: 'assets/skills/devextreme.png' },
    { skillname: 'Angular', img: 'assets/skills/Angular.png' },
    { skillname: 'C#', img: 'assets/skills/c-sharp.png' },
    { skillname: '.Net Core Web API', img: 'assets/skills/visual-studio.png' },
    { skillname: 'Telerik', img: 'assets/skills/telerik.png' },
    { skillname: 'MS SQL', img: 'assets/skills/database.png' },
  ];

  skills: Skill[] = [];

  ngOnInit(): void {
    this.streamSkills().subscribe(s => {
      this.skills.push(s);
    });
  }

  streamSkills(): Observable<Skill> {
    return interval(100).pipe(
      take(this.skill.length),
      map(x => this.skill[x])
    );
  }
}
