import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav'; 
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { PostFormComponent } from '../post-form/post-form.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

  id!: any;                // id in routerLink
  currentUserId!: string;     // user id from local storage

  // User Info
  defaultImageSrc = '../../../../assets/images/defaultProfile.jpg';
  friendsList: any;
  editProfileForm: FormGroup = this._fb.group({
    name: '',
    bio: '',
    email: '',
    password: '',
    phone: '',
    facebook: ''
  });
  user!: any; 
  reader = new FileReader();
  imagePath!: File;
  isFriend :boolean = false;
  editForm = false;
  isCuurentUser = false;


  // Subscriptions
  private sub: any;
  private subButton: any;
  private subCheck: any;
  private subFriends: any;
  private subImage: any;
  
  
  // UI 
  screenWidth!: number;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  opened: boolean = true;


  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private _fb: FormBuilder,
              private routerReuse: RouteReuseStrategy){
    this.routerReuse.shouldReuseRoute = function () {
      return false;
    };
  }

  // ___ FUNCTIONS ___

  //Breakpoint obs
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    this.screenWidth = window.innerWidth;
    };
  }

  // Get user object from api
  getUser(userId: string){
    this.userService.getUser(userId).subscribe({
      next: (user) => {
        if(!user['pic'] || user['pic'] == undefined){
          user.pic = this.defaultImageSrc;
        }
        this.user = user;
      } 
    });
  }

  // Get friends list of the current profile 
  getFriends(id: string){
    this.subFriends = this.userService.getFriends(id).subscribe({
      next: (friends: any) => this.friendsList = friends
    });
  }

  // Check if the user and the current profile are friends or not
  checkFriend(userId: string, id: string){
    this.subCheck = this.userService.checkFriend(userId, id).subscribe({
      next: (response: boolean) => {
        this.isFriend = response;
        console.log(this.isFriend)
      }
    });
  }

  // Get all user info 
  getProfileInfo(){
    this.sub = this.route.children[0].paramMap.subscribe(params => {
      this.id = params.get('id');  // get profile id from the route
      this.getUser(this.id);

      this.currentUserId = this.userService.getUserId();    // get user id from the local storage

      if(this.currentUserId != this.id){
        this.checkFriend(this.currentUserId, this.id);
        this.isCuurentUser = false;
      }
      else{
        this.isCuurentUser = true;
      }

      this.getFriends(this.id);

    });
  }

  // For edit profile button
  editProfile(){
    this.editForm = true;
    this.editProfileForm.patchValue({
      name: this.user.name,                                     
      bio: this.user.bio,
      email: this.user.email,
      password: this.user.password,
      phone: this.user.phone,
      facebook: this.user.facebook
    })
  }

  // Cancle edit profile form
  onCancle(){
    this.editForm = false;
  }

  // Submit edit profile form
  onSubmit(){
    this.editForm = false;
    const updated = Object.assign({}, this.editProfileForm.value, {pic: this.user.pic});
    this.subButton = this.userService.updateUser(this.currentUserId, updated).subscribe({           
      next: (resonse: any) => this.user = resonse
    })
  }

  // For upload photo
  onChange(event: any) {
    // const file = event.target.files[0];
    // const formData = new FormData();
    // formData.append("pic", file);
    // let userData = {
    //   pic: formData,                                   
    //   name: this.user.name,
    //   bio: this.user.bio,
    //   email: this.user.email,
    //   password: this.user.password,      //////////////
    //   phone: this.user.phone,
    //   facebook: this.user.facebook
    // }
    // this.subImage = this.userService.updateUser(this.currentUserId, userData).subscribe({
    //   next: (response) => this.user = response
    // })
    const file = event.target.files;
    this.imagePath = file;
    this.reader.readAsDataURL(file[0]);
    this.reader.onload = (_event) => {
      let userData = {
        pic: this.reader.result,                                   
        name: this.user.name,
        bio: this.user.bio,
        email: this.user.email,
        password: this.user.password,      //////////////
        phone: this.user.phone,
        facebook: this.user.facebook
      }
      // Need an api for image upload alone
      this.subImage = this.userService.updateUser(this.currentUserId, userData).subscribe({
        next: (response) => this.user = response
      })
    }
  }

  // For add friend button
  addFriend(){
    this.subButton = this.userService.addFriend(this.currentUserId, this.id).subscribe({
      next: () => {
        this.isFriend = true;
        this.getFriends(this.id);
      }                  
    });
  }

  // For delete friend button
  deleteFriend(){
    this.subButton = this.userService.deleteFriend(this.currentUserId, this.id).subscribe({
      next: () => {
        this.isFriend = false;
        this.getFriends(this.id);
      }
    });
  }

  // Add post dialog
  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.matDialog.open(PostFormComponent, dialogConfig);
  }

  // For sidenav 
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
  
  // close() {
  //   this.opened = false;
  //   this.sidenav.close();
  // }




  ngOnInit(): void {
    this.getScreenWidth();
    this.getProfileInfo();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if(this.subButton){
      this.subButton.unsubscribe();
    }
    if(this.subCheck){
      this.subCheck.unsubscribe();
    }
    if(this.subImage){
      this.subImage.unsubscribe();
    }
    this.subFriends.unsubscribe();
  }
}
