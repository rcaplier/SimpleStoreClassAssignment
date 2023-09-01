import { Component } from '@angular/core';
import {SavedFile} from "../../entities/saved-file";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-see-file',
  templateUrl: './see-file.component.html',
  styleUrls: ['./see-file.component.scss']
})
export class SeeFileComponent {

  file?: SavedFile;

  valueSearch: string;
  value: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router
    ) {
    this.valueSearch = '';
    this.value = '';
    this.activatedRoute.params.subscribe((params) => {
      if (!this.storageService.keyExist(params['fileName'])) this.router.navigateByUrl('');
      this.file = this.storageService.getFromLocalStorage(params['fileName'])!;
    });

  }

  checkValue() {
    if (this.valueSearch !== '') {
      const keys = this.valueSearch.split('.');
      try {
        let current = this.file?.data;
        for (const k of keys) {
          if (!current.hasOwnProperty(k)) {
            return undefined;
          }
          current = current[k];
        }
        if (current) {
          this.value = JSON.stringify(current);
        }

      } catch (e) {
        console.error(e);
      }
    }else {
      this.value = '';
    }
  }

}
