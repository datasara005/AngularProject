import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InformaciaService } from './service/informacia.service';
import { InformaciuliModel } from './models/informaciuli.model';
import { UserModel } from './models/user.model';
import { UserService } from './service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  informacia: InformaciuliModel[] = [];
  users: UserModel[]= [];
  constructor(private informaciaService: InformaciaService , private userService: UserService) {}

  ngOnInit(): void {
    this.informaciaService.getInformacia().subscribe((data) => {
      this.informacia = data;
    });
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users)
    })


  }

}
