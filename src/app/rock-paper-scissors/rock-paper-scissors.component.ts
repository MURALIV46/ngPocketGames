import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss']
})
export class RockPaperScissorsComponent implements OnInit {
  playerIcon: SafeHtml = '';
  compIcon: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  choices = ['Rock', 'Paper', 'Scissors'];
  rock = '✊';
  paper = '✋';
  scissors = '✌️';
  vs = '🆚';
  userChoice = '';
  computerChoice = '';
  result = '';
  displayFlag = false;
  isTransformed = false;
  showPopup = false;
  // ✅ Scorecard
  wins = 0;
  losses = 0;
  ties = 0;

  play(userChoice: string): void {
    if(userChoice == 'comp'){
      alert('Choose from Player');
      return;
    }
    this.displayFlag = false;
    this.isTransformed = true;
    this.result = "";
    setTimeout(() => {
    this.isTransformed = false;
    this.displayFlag = true;
    this.userChoice = userChoice;
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    this.result = this.getResult(this.userChoice, this.computerChoice);
    const iconMap: { [key: string]: string } = {  // ✅ Explicitly define type
      Rock: '<i class="fas fa-hand-rock fa-3x"></i>',
      Paper: '<i class="fas fa-hand-paper fa-3x"></i>',
      Scissors: '<i class="fas fa-hand-scissors fa-3x"></i>',
    };
    this.playerIcon = this.sanitizer.bypassSecurityTrustHtml(iconMap[userChoice] || '');
    this.compIcon = this.sanitizer.bypassSecurityTrustHtml(iconMap[this.computerChoice] || '');
    if(this.result === 'win'){
      this.result = 'YOU WON';
      this.wins++
    };
    if (this.result === 'draw'){
      this.result = 'It\'s a Draw';
      this.ties++;
    }
    if (this.result === 'lose'){
      this.result = 'YOU LOSE';
      this.losses++;
    }
    if(this.wins == 10){
      this.showPopup = true;
      this.result = '🎉 HURRAY! YOU WON THE GAME!';
    }
    if(this.losses == 10){
      this.showPopup = true;
      this.result = '😢 OH NO! YOU LOST THE GAME.';
    }
    
    }, 1000);
  }

  getResult(user: string, computer: string): string {
    if (user === computer){
      return "draw";
    }
    else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'win';
    }
    else{
      return 'lose';
    }
  }

  closePopup() {
    this.resetScore();
    this.showPopup = false;
  }

  resetScore(): void {
    this.result = "";
    this.playerIcon = "";
    this.compIcon = "";
    this.displayFlag = false;
    this.wins = this.losses = this.ties = 0;
  }
}
