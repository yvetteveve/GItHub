import {GithubService} from '../github/github.service';
import { Component, OnInit } from '@angular/core';
import {Github} from '../github-class/github';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[GithubService], //add the providers to the component
  styleUrls: ['./github.component.css']
  
})
export class GithubComponent implements OnInit {
  user:any; data:any;
  github:Github;
  constructor(githubService:GithubService,private http:HttpClient) {
    this.user = 'yvetteveve';
  }
    // githubService:GithubService
    // this.github = githubService.getGithub()
   

  ngOnInit() {

    interface ApiResponse{
      followers:any;
     
  } 
    this.http.get<ApiResponse>('https://api.github.com/users/'+this.user+'?access_token=151e266f42769cb77596e864f54a9d41724df674').subscribe(data=>{
      this.data= data;
      console.log(data);
      return this.user.data;

    },err=>{
      this.github= new Github("Never, never, never give up.","winston churchill")
      console.log("Error occured ")
  })
  }
}
