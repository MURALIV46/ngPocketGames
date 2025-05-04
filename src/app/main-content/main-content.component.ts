import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoGame(){
    this.router.navigate(['/rps']);
  }
}
