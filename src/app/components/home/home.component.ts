import {Component, ElementRef, ViewChild} from '@angular/core';
import {StorageService} from "../../services/storage/storage.service";
import {SavedFile} from "../../entities/saved-file";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  file: any;
  fileName: string;

  nameAlreadyExist: boolean;
  fileErrorMessage: boolean;

  filePicked: boolean;

  savedFiles: SavedFile[];

  fileReader: any;

  @ViewChild('filePicker')
  filePicker?: ElementRef;

  constructor(private storageService: StorageService) {
    this.fileErrorMessage = false
    this.file = null;
    this.nameAlreadyExist = false;
    this.filePicked = false;
    this.fileName = '';
    this.savedFiles = this.storageService.getAllFilesFromStorage();

    this.fileReader = new FileReader();
    this.fileReader.onload = (event: any) => this.onReaderLoad(event);
  }

  process() {
    if (this.storageService.saveToLocalStorage(this.fileName, JSON.stringify(this.file))) {
      this.savedFiles = this.storageService.getAllFilesFromStorage();
      this.fileName = '';
      this.file = null;
      this.filePicker!.nativeElement.value = null;
    } else {
      this.fileErrorMessage = true;
    }
  }

  resetStorage() {
    this.storageService.reset();
    this.savedFiles = [];
  }

  export() {
    if (this.savedFiles.length === 0) return;
    const blob = new Blob([JSON.stringify(this.savedFiles, null, 2)], { type: 'application/json' });
    const url= window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'store.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  checkIfNameAlreadyExist() {
    this.nameAlreadyExist = this.fileName !== '' && this.storageService.keyExist(this.fileName);
  }

  fileChanged(event: any) {
    this.fileReader.readAsText(event.target.files[0]);
  }

  onReaderLoad(event: any) {
    this.filePicked = true;
    try {
      this.file = JSON.parse(event.target.result);
      this.fileErrorMessage = false;
    } catch (e) {
      console.error(e)
      this.fileErrorMessage = true;
    }
  }
}

