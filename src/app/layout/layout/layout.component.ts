import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoMenuItem, PoMenuModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, PoMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home'},
  ];
}
