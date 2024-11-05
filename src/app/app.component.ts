import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InformaciaService } from './service/informacia.service';
import { InformaciuliModel } from './models/informaciuli.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  informacia: InformaciuliModel[] = [];

  constructor(private informaciaService: InformaciaService) {}

  ngOnInit(): void {
    this.informaciaService.getInformacia().subscribe((data) => {
      this.informacia = data;
    });
  }
}