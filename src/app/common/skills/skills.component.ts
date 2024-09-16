import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  @Input() skill: any[] = [];
  skills: any[] = [];

  ngOnInit(): void {
    this.streamSkills().subscribe(s => {
      this.skills.push(s);
    });
  }

  streamSkills(): Observable<any> {
    return interval(100).pipe(
      take(this.skill.length),
      map(x => this.skill[x])
    );
  }
}
