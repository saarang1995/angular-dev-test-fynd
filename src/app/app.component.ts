import { Component } from "@angular/core";
import { ApiService } from "./services/api.service";
import { DatabaseService } from "./services/database.service";
import { DemoImageInterface } from "./interfaces/demo-image-intf";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  demoImages: DemoImageInterface[];

  constructor(
    private apiService: ApiService,
    private databaseService: DatabaseService
  ) {
    this.databaseService.demoImagesDataChangeEvent$.subscribe(
      () => (this.demoImages = this.databaseService.getDemoImagesData())
    );
  }

  ngOnInit(): void {
    this.apiService.fetchDemoImages();
  }
}
