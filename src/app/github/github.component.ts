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
   

  ngOnInit(user) {

    interface ApiResponse{
      github:string;
      followers:string
  } 
    this.http.get<ApiResponse>('https://api.github.com/users/'+user+'?access_token='+environment.api_key).subscribe(data=>{
      this.github= new Github(data.github,data.followers)
    },err=>{
      this.github= new Github("Never, never, never give up.","winston churchill")
      console.log("Error occured ")
  })
  }
}
