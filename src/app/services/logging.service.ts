import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {

  constructor() {
  }

  log(errorPost: any) {
    console.log(errorPost);

  }

}
