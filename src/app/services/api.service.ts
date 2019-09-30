import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatabaseService } from "./database.service";
import { ImageDataInterface } from '../interfaces/image-data-intf';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private databaseService: DatabaseService
  ) {}

  API_BASE: string = "https://demo4126999.mockable.io/";

  API = {
    IMAGE_DATA: this.API_BASE + "images"
  };

  fetchImageData() {
    return this.http
      .get(this.API.IMAGE_DATA)
      .subscribe((data: ImageDataInterface[]) => {
        this.databaseService.setImageData(data)
      });
  }
}
