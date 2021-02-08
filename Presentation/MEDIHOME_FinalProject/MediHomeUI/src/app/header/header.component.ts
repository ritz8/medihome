import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ro:Router) { }

  about()
  {
    this.ro.navigate(['/about']);
  }
  
  consultation()
  {
    this.ro.navigate(['/consultation']);
  }

  ngOnInit(): void {
  }

}
