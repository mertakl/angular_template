import { Injectable } from '@angular/core';
import { configuration} from '../../configuration';

@Injectable()
export class ConfigService {

  config = configuration;

  constructor() { }

  getConfig() {
    return this.config;
  }

}
