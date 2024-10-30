import { Component, inject } from '@angular/core';
import { SocialIconsComponent } from '../social-icons/social-icons.component';
import { Router } from '@angular/router';
import { StylingService } from '../../../service/styling.service';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [SocialIconsComponent],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  
  stylingService = inject(StylingService);

  constructor(private router : Router, private snackBar: MatSnackBar){}

  currentColor: string = 'border-black';
  currentAnimationColor: string = 'bg-yellow-400';
  private isDownloading = false;
  private debounceTime = 1000;

  changeColor() {
    this.currentColor = this.stylingService.getRandomBorderColor();
  }

  changeAnimationColor(){
    this.currentAnimationColor = this.stylingService.getRandomBgColor();
  }

  copyToClipboard(){
    navigator.clipboard.writeText('mayurgurav0297@gmail.com');
    this.snackBar.open('Copied to clipboard.','Yay !',{ horizontalPosition : 'right', verticalPosition : 'top', duration : 3000});
  }

  downloadCV(){
    if (this.isDownloading) return;

    this.isDownloading = true;
    const link = document.createElement('a');
    link.href = 'assets/Mayur Gurav Resume.pdf';
    link.download = 'Mayur Gurav Resume.pdf';
    link.click();

    this.snackBar.open('Downloaded ..!','Enjoy !',{ horizontalPosition : 'right', verticalPosition : 'top', duration : 3000});

    setTimeout(() => {
      this.isDownloading = false;
    }, this.debounceTime); 
  }

  navigateToPersonal(){
    this.router.navigate(['personal']);
  }
}