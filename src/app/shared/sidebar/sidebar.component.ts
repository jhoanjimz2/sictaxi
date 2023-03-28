import { Component } from '@angular/core';
import { ItemSidebar } from 'src/app/interfaces';
import { secretaria } from '../../../assets/data/items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items!: ItemSidebar[];

  constructor() {
    this.items = secretaria;
  }
  
}
