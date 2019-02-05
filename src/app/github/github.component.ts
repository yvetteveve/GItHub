import {GithubService} from '../github/github.service';
import { Component, OnInit } from '@angular/core';
import {Github} from '../github'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[GithubService], //add the providers to the component
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  github:Github;
  constructor(githubService:GithubService) {
    this.github = githubService.getGithub()
  }
    // githubService:GithubService
    // this.github = githubService.getGithub()
   

  ngOnInit() {
  }

}
