import { Component } from '@angular/core';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  user: any;
  constructor(private service:GitService){}  

  ngOnInit(){
    this.service.getUser().subscribe((data:any) => this.user = data)
  }


}
