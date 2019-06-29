import { Injectable } from '@angular/core';
import {IUser} from 'src/app/shared/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:IUser;
  private listUser:IUser[]=[
    {id:1,firstName:'imranfgh',lastName:'khan',phone:'0178255',email:'imra@gmail.com',address:'moragacha',password:'123456',confirmPassword:'123456'},
    {id:2,firstName:'alif',lastName:'khan',phone:'0178255',email:'imra@gmail.com',address:'moragacha',password:'123456',confirmPassword:'123456'} 
   ];
   getUser():IUser[]{
     return this.listUser;
   }
   save(user:IUser){
     return this.listUser.push(user)
   }

   delete(id:number){
const i=this.listUser.findIndex(e=>e.id===id)
if(i!= -1){
  this.listUser.splice(i,1);
 
}
   }
   updateUser(id:number){
     firstName:this.user.firstName;
     lastName:this.user.lastName;
     phone:this.user.phone;
     email:this.user.email;
     address:this.user.address;
     password:this.user.password;
     confirmPassword:this.user.confirmPassword
   }
  constructor() { }
}
