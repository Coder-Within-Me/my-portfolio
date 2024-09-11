import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

interface tool{
  toolname : string;
  img : string;
}

@Component({
  selector: 'app-tools-used',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools-used.component.html',
  styleUrl: './tools-used.component.css'
})
export class ToolsUsedComponent implements OnInit {

  tool: tool[] = [
    { toolname: 'Visual Studio Code', img: 'assets/tools/vs code.png' },
    { toolname: 'Visual Studio', img: 'assets/skills/visual-studio.png' },
    { toolname: 'SSMS', img: 'assets/tools/ssms.png' },
    { toolname: 'Postman', img: 'assets/tools/postman.png' },
    { toolname: 'Soup UI', img: 'assets/tools/soup ui.png' },
    { toolname: 'MS Azure Portal', img: 'assets/skills/azure.png' },
    { toolname: 'Azure DevOps Portal', img: 'assets/tools/Azure Devops.png' },
    { toolname: 'Github', img: 'assets/skills/github.png' },
    { toolname: 'Docker', img: 'assets/tools/docker.png' },
  ];

  tools: tool[] = [];

  ngOnInit(): void {
    this.streamTools().subscribe(s => {
      this.tools.push(s);
    });
  }

  streamTools(): Observable<tool> {
    return interval(200).pipe(
      take(this.tool.length),
      map(x => this.tool[x])
    );
  }
}
