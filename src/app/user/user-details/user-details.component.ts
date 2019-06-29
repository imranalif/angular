import { Component, OnInit } from '@angular/core';
import {IUser} from 'src/app/shared/user.model';
import {UserService} from 'src/app/shared/user.service';
import { MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router'



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  user:IUser;
 dataSource=[]; 
users:IUser[]=[
 /* {  id:null,
    firstName:null,
    lastName:null,
    phone:null,
    email:'',
    address:null,
    password:null,
    confirmPassword:null}*/
];

 /*users:IUser[]=[
  {firstName:'imran5',lastName:'khan',phone:'0178255',email:'imra@gmail.com',address:'moragacha',password:'123456',confirmPassword:'123456'},
  {firstName:'alif',lastName:'khan',phone:'0178255',email:'imra@gmail.com',address:'moragacha',password:'123456',confirmPassword:'123456'} 
 ]*/
  constructor(private _userSirvice:UserService,private _router:Router) { }

  ngOnInit() {
    
   this.users=this._userSirvice.getUser();
   console.log(this.users);
   this.dataSource=this.users;
  
   
  }
  //this.users=this._userSirvice.getUser();
  displayedColumns: string[] = ['firstName', 'lastName', 'phone', 'email', 'address', 'password','action'];


  editUser(id:number){
this._router.navigate(['/edit',id]);
  }
  //dataSource =this.users;
  
 deleteUser(){
   this._userSirvice.delete(this.user.id);}
 // deleteUser(id:number){
//this.users.splice(id)
 // }
  
 /* deleteUser(id:number){
    const i=this.users.findIndex(e=>e.id===id)
    if(i!= -1){
      this.users.splice(i,1);
    }
  } */  

}

