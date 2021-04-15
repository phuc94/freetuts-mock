import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from '../Service/identity.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: IdentityService
  ) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.userService.behaviorSub.next(false);
    this.router.navigateByUrl('/login');
  }
}
