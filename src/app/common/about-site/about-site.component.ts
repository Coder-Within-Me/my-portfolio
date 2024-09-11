import { Component, inject, signal } from '@angular/core';
import { StylingService } from '../../service/styling.service';
import { CommonModule } from '@angular/common';
import { DateDiffCalculatorService } from '../../service/date-diff-calculator.service';
import { Skill } from '../skills/skills.component';
import { interval, map, Observable, take } from 'rxjs';

interface Details{
  title : string;
  data : string;
}

interface Quote{
  quote : string;
  author : string;
}

@Component({
  selector: 'app-about-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-site.component.html',
  styleUrl: './about-site.component.css'
})
export class AboutSiteComponent {

  stylingService = inject(StylingService);
  dateDiffCalculatorService = inject(DateDiffCalculatorService);

  currentColor: string = '';
  currentQuote: Quote = {} as Quote;
  startDate = new Date('2020-12-31');
  birthDate = new Date('1997-09-02');
  skills: Skill[] = [];

  constructor(){
    this.details.filter(f => f.title == 'My Age')[0].data = this.dateDiffCalculatorService.formatYearsAndMonths(this.birthDate);
    this.details.filter(f => f.title == 'My Experience')[0].data = this.dateDiffCalculatorService.formatYearsAndMonths(this.startDate);
  }

  quotes: Quote[] = [
    { quote: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
    { quote: "Take up one idea. Make that one idea your life—think of it, dream of it, live on that idea.", author: "Swami Vivekananda" },
    { quote: "If people are not making mistakes, they are not trying new things. So if you want innovation, you need to accept failure.", author: "Vineet Nayar" },
    { quote: "In a day, when you don't come across any problems—you can be sure that you are traveling in a wrong path.", author: "Swami Vivekananda" },
    { quote: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
    { quote: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
    { quote: "Our future success is directly proportional to our ability to understand, adopt, and integrate new technology into our work.", author: "Sundar Pichai" },
    { quote: "When the rate of change outside exceeds the rate of change inside, the end is in sight.", author: "Azim Premji" },
    { quote: "Wear your failure as a badge of honor!", author: "Sundar Pichai" }
];

  getRandomQuote() {
    const i = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[i];
  }

  skill: Skill[] = [
    { skillname: 'Angular', img: 'assets/skills/Angular.png' },
    { skillname: 'TypeScript', img: 'assets/skills/typescript.png' },
    { skillname: 'RxJS', img: 'assets/skills/rxjs.png' },
    { skillname: 'HTML', img: 'assets/skills/html.png' },
    { skillname: 'Tailwind CSS', img: 'assets/skills/tailwind css.png' },
    { skillname: 'Material UI', img: 'assets/skills/material ui.png' },
    { skillname: 'Git', img: 'assets/skills/git.png' },
    { skillname: 'Github', img: 'assets/skills/github.png' }
  ]

  details : Details[] = [
    { title: 'My Age', data: '1 month' },
    { title: 'My Experience', data: '1 month' },
    { title: 'Last Updated', data: '02 Sep 2024' }
  ];

  ngOnInit(): void {
    this.streamSkills().subscribe(s => {
      this.skills.push(s);
    });
    this.getRandomQuote();
  }

  streamSkills(): Observable<Skill> {
    return interval(200).pipe(
      take(this.skill.length),
      map(x => this.skill[x])
    );
  }

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }
}
