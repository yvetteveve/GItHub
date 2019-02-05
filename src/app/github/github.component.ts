import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  // providers:[githubService], //add the providers to the component
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  // github:Github[];
  constructor() {
    // githubService:GithubService
    // this.github = githubService.getGithub()
   }

  ngOnInit() {
  }

}
