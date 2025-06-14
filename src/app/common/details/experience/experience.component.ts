import { Component, inject, signal } from '@angular/core';
import { SkillsComponent } from '../../skills/skills.component';
import { StylingService } from '../../../service/styling.service';
import { ToolsUsedComponent } from '../../tools-used/tools-used.component';
import { CardComponent } from '../../card/card.component';
import { DateDiffCalculatorService } from '../../../service/date-diff-calculator.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SkillsComponent, ToolsUsedComponent, CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  startDateTotal = new Date('2020-12-31');
  startDate = new Date('2025-01-28');
  timespan = signal<string>('1 month');
  timespanTotal = signal<string>('1 month');

  stylingService = inject(StylingService);
  dateDiffCalculatorService = inject(DateDiffCalculatorService);

  currentColor: string = '';

  constructor(){
    this.timespan.set(this.dateDiffCalculatorService.formatYearsAndMonths(this.startDate));
    this.timespanTotal.set(this.dateDiffCalculatorService.formatYearsAndMonths(this.startDateTotal));
  }

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }

 
}
