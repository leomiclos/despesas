import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoTableAction,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    PoMenuModule,
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {

  constructor(
    private router: Router
  ){}


  actions: PoTableAction[] = [
    {
      action: this.logout.bind(this),
      label: 'Sair',
      icon: 'po-icon po-icon-last-page',

    }
  ];

  logout() {
    this.router.navigate(['/login'])
  }
  readonly menus: Array<PoMenuItem> = [{ label: 'Home' }];
}
