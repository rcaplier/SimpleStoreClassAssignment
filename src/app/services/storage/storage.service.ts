import { Injectable } from '@angular/core';
import {SavedFile} from "../../entities/saved-file";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private keyList: string[] = [];
  constructor() {
    this.initKeyListStorage();
  }

  saveToLocalStorage(fileName: string, data: any):boolean {
    if (!this.isSerializable(data)) return false;
    this.keyList.push(fileName);
    this.storeKeyListToStorage();
    localStorage.setItem(fileName, data);
    return true;
  }

  getFromLocalStorage(fileName: string): SavedFile | null {
    if (this.keyList.includes(fileName)) {
      const data = JSON.parse(localStorage.getItem(fileName)!);
      return new SavedFile(fileName, data);
    }
    return null;
  }

  getAllFilesFromStorage(): SavedFile[] {
    if (this.keyList.length === 0) return [];

    const filesFromStorage = [];

    for (let fileName of this.keyList) {
      filesFromStorage.push(new SavedFile(fileName, JSON.parse(localStorage.getItem(fileName)!)));
    }

    return filesFromStorage;
  }

  keyExist(key: string): boolean {
    return this.keyList.includes(key) || key === 'keyList';
  }

  reset() {
    localStorage.clear();
    this.keyList = [];
    this.storeKeyListToStorage();
  }

  private initKeyListStorage() {
    if (localStorage.getItem('keyList') === null) {
      this.keyList = [];
      localStorage.setItem('keyList', '');
    } else {
      this.getKeyListFromStorage();
    }
  }

  private getKeyListFromStorage() {
    if (localStorage.getItem('keyList') === '') {
      this.keyList = [];
    } else {
      this.keyList = localStorage.getItem('keyList')!.split(';');
    }
  }

  private storeKeyListToStorage() {
    const keyList = this.keyList.join(';');
    localStorage.setItem('keyList', keyList);
  }

  private isSerializable(data: any): boolean {
    try {
      JSON.stringify(data);
      return true;
    } catch {
      console.error('This data is not a valid JSON')
      return false;
    }
  }
}
