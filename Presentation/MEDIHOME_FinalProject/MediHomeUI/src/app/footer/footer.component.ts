import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private ro:Router) { }

  about()
  {
    this.ro.navigate(['/about']);
  }
  
  consultation()
  {
    this.ro.navigate(['/consultation']);
  }

  pharmacy()
  {
    this.ro.navigate(['/pharmacy']);
  }

  ngOnInit(): void {
  }

}
