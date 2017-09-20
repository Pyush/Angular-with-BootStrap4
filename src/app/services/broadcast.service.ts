import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class BroadcastService {

  constructor() { }

  @Output() editorWizardObserver: EventEmitter<boolean> = new EventEmitter();

  setEditorWizard(data: boolean) {
    this.editorWizardObserver.emit(data);
  }

  getEditorWizard() {
    return this.editorWizardObserver;
  }

}
