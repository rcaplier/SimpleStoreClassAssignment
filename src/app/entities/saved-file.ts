export class SavedFile {

  fileName: string;
  private _data: any;


  constructor(fileName: string, data: any) {
    this.fileName = fileName;
    this.data = data;
  }

  set data(data: any) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

}
