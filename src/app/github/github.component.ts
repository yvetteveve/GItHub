import {GithubService} from '../github/github.service';
import { Component, OnInit } from '@angular/core';
import {Github} from '../github-class/github'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[GithubService], //add the providers to the component
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  github:Github;
  constructor(githubService:GithubService,private http:HttpClient) {
    // this.github = githubService.getGithub();
  }
    // githubService:GithubService
    // this.github = githubService.getGithub()
   

  ngOnInit() {
    this.http.get("'https://api.github.com/users/daneden?access_token=' + apiKey").subscribe(data=>{
  })
  }
}
