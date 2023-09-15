import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav'; 
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { PostFormComponent } from '../post-form/post-form.component';



export interface User {
  picUrl: string | ArrayBuffer | null,
  name: string,
  bio: string,
  email: string,
  phone: string,
  facebook: string
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

  id!: string;                // id in routerLink
  currentUserId!: string;     // user id from local storage
  private sub: any;
  private subButton: any;
  private subCheck: any;
  private subFriends: any;
  private subImage: any;
  isFriend = false;
  friendsList = [];
  editForm = false;
  editProfileForm: FormGroup = this._fb.group({
    name: '',
    bio: '',
    email: '',
    phone: '',
    facebook: ''
  });
  reader = new FileReader();
  imagrPath!: File;

  screenWidth!: number;
  user!: any;                                       // make it of type User

  @ViewChild('sidenav') sidenav!: MatSidenav;
  opened: boolean = true;

  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private _fb: FormBuilder,){
  }

  getUser(userId: string){
    return this.userService.getUser(userId).subscribe({
      next: (user) => {
        return user;
      } 
    });
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    this.screenWidth = window.innerWidth;
    };


    
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.user = this.getUser(this.id);
    });

    this.currentUserId = this.userService.getUserId();    


    this.subCheck = this.userService.checkFriend(this.currentUserId, this.id).subscribe({
      next: (response: boolean) => {
        if(response == true){
          this.isFriend = true;
        }
        else{
          this.isFriend = false;
        }
      }
    });

    this.subFriends = this.userService.getFriends(this.currentUserId).subscribe({
      next: (friends: any) => this.friendsList = friends
    });

    
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // this.subButton.unsubscribe();
    // this.subCheck.unsubscribe();
    // this.subFriends.unsubscribe();
  }

  editProfile(){
    this.editForm = true;
    this.editProfileForm.patchValue({
      name: this.user1.name,                                     // change user1 to user
      bio: this.user1.bio,
      email: this.user1.email,
      phone: this.user1.phone,
      facebook: this.user1.facebook
    })
  }

  onChange(event: any) {
    const file = event.target.files;
    this.imagrPath = file;
    this.reader.readAsDataURL(file[0]);
    this.reader.onload = (_event) => {
      let userData = {
        picUrl: this.reader.result,                                   //change user1 to user
        name: this.user1.name,
        bio: this.user1.bio,
        email: this.user1.email,
        phone: this.user1.phone,
        facebook: this.user1.facebook
      }
      this.subImage = this.userService.updateUser(this.currentUserId, userData).subscribe({
        next: (response) => this.user = response
      })
    }
    
  }

  addFriend(){
    this.subButton = this.userService.addFriend(this.currentUserId, this.id).subscribe({
      next: () => this.isFriend = true,                                          // need to call getFriends() ?
      error: () => this.isFriend = false                      
    });
  }

  deleteFriend(){
    this.subButton = this.userService.deleteFriend(this.currentUserId, this.id).subscribe({
      next: () => this.isFriend = false,                                         // need to call getFriends() ?
      error: () => this.isFriend = true
    });
  }

  onSubmit(){
    this.editForm = false;
    this.subButton = this.userService.updateUser(this.currentUserId, this.editProfileForm.value).subscribe({           
      next: (resonse: any) => this.user = resonse
    })
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.matDialog.open(PostFormComponent, dialogConfig);
  }


  //For Display
  user1: User = {
    picUrl: '../../../../assets/images/LeviAckerman.jpg',
    name: 'Levi Acerman',
    bio: 'Lorem ipsum dolor sit amet.',
    email: 'levi_acerman@gmail.com',
    phone: '+20 1156459200',
    facebook: 'Gehad28',
    // groups: ['Backend Developers', 'Frontend Developers', 'Attack On Titan Fans']
  }
  
  toggle(){
    this.opened = !this.opened;
    if(this.opened){
      this.sidenav.open();
    }
    else{
      this.sidenav.close();
    }
    return this.opened;
  }
  
  close() {
    this.opened = false;
    this.sidenav.close();
  }

  
}
