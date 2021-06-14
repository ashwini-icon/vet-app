import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginAutheticationService } from 'src/app/services/login-authetication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  userName: any = '';
  userPass: any = '';
  

  
  constructor(private route:Router,
    private srv:LoginAutheticationService) { }
  
  ngOnInit(): void {
  }

  LoginUser(){
    let loginparam = {username : this.userName , password:this.userPass }
    this.srv.Login(loginparam).subscribe((responseData :any) => {
        if(responseData['error'] == false){
          localStorage.setItem('currentUser', JSON.stringify(responseData["data"][0]));
          this.route.navigate(['/home',{roleid:responseData["data"][0]['role']}])
        }
    });    
  }

}
