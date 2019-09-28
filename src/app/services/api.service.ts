import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatabaseService } from "./database.service";
import { DemoImageInterface } from '../interfaces/demo-image-intf';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private databaseService: DatabaseService
  ) {}

  API_BASE: string = "http://demo4126999.mockable.io/";
  API = {
    DEMO_IMAGES: this.API_BASE + "images"
  };

  fetchDemoImages() {
    return this.http
      .get(this.API.DEMO_IMAGES)
      .subscribe((data: DemoImageInterface[]) => {
        this.databaseService.setDemoImagesData(data)
      });
  }
}
