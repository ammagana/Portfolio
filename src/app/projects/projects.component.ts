import { Component } from '@angular/core';
import { GitService } from '../services/git.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private userService:GitService){}
  repos: any;

  ngOnInit(){
    this.userService.getRepos().subscribe((data:any) => { this.repos = data})
  }

}
