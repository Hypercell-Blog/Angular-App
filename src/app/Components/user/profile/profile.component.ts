import { AfterViewInit, Component, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav'; 
import { ActivatedRoute, RouteReuseStrategy, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { PostFormComponent } from '../post-form/post-form.component';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy,AfterViewInit {

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
    facebookUsername: ''
  });
  user!: any; 
  reader = new FileReader();
  imagePath!: File;
  isFriend :boolean = false;
  editForm = false;
  isCuurentUser = false;


  // Subscriptions
  subs: Subscription[] = [];
  
  
  // UI 
  screenWidth!: number;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  opened: boolean = true;


  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private _fb: FormBuilder,
              private routerReuse: RouteReuseStrategy,
              private _sanitizer: DomSanitizer){
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
        if(user['pic'] != this.defaultImageSrc){
          this.user.pic = this._sanitizer.bypassSecurityTrustResourceUrl(user['pic']) as string;
        }
      } 
    });
  }

  // Get friends list of the current profile 
  getFriends(id: string){
    const subFriends = this.userService.getFriends(id).subscribe({
      next: (friends: any) => {
        this.friendsList = friends;
        this.friendsList.forEach((ele: any) => {
          if(ele['pic'] != this.defaultImageSrc){
            ele['pic'] = this._sanitizer.bypassSecurityTrustResourceUrl(ele['pic']) as string;
          }
        });
      }
    });
    this.subs.push(subFriends);
  }

  // Check if the user and the current profile are friends or not
  checkFriend(userId: string, id: string){
    const subCheck = this.userService.checkFriend(userId, id).subscribe({
      next: (response: boolean) => {
        this.isFriend = response;
      }
    });
    this.subs.push(subCheck);
  }


  // Get all user info 
  getProfileInfo(){
    const sub = this.route.children[0].paramMap.subscribe(params => {
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

    this.subs.push(sub);
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
      facebookUsername: this.user.facebookUsername
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
    const subButton = this.userService.updateUser(this.currentUserId, updated).subscribe({           
      next: (resonse: any) => this.user = resonse
    });

    this.subs.push(subButton);
  }

  // For upload photo
  onChange(event: any) {
    const file = event.target.files;
    this.imagePath = file;
    this.reader.readAsDataURL(file[0]);
    this.reader.onload = (_event) => {
      const subImage = this.userService.uploadImage(this.currentUserId, this.reader.result).subscribe({
        next: (response: any) => {
          this.user.pic = this._sanitizer.bypassSecurityTrustResourceUrl(response['image']) as string;
        }
      });

      this.subs.push(subImage);
    }
  }

  // For add friend button
  addFriend(){
    const subButton = this.userService.addFriend(this.currentUserId, this.id).subscribe({
      next: () => {
        this.isFriend = true;
        this.getFriends(this.id);
      }                  
    });

    this.subs.push(subButton);
  }

  // For delete friend button
  deleteFriend(){
    const subButton = this.userService.deleteFriend(this.currentUserId, this.id).subscribe({
      next: () => {
        this.isFriend = false;
        this.getFriends(this.id);
      }
    });

    this.subs.push(subButton);
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

  ngOnInit(): void {
    this.getScreenWidth();
    this.getProfileInfo();
  }

  ngOnDestroy(): void {
    this.subs.forEach(ele => {
      if(ele){
        ele.unsubscribe();
      }
    });
  }

  ngAfterViewInit(): void {
   
  }
}
