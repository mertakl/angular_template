import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigation: {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.navigation = this.getNavigation();
  }

  getNavigation() {
    return this.config.getConfig().navigation;
  }

}
