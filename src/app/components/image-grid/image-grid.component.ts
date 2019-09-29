import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { DemoImageInterface } from "src/app/interfaces/demo-image-intf";
import { DatabaseService } from "src/app/services/database.service";

@Component({
  selector: "app-image-grid",
  templateUrl: "./image-grid.component.html",
  styleUrls: ["./image-grid.component.scss"]
})
export class ImageGridComponent implements OnInit {
  demoImages: DemoImageInterface[];
  imageToEdit: DemoImageInterface;
  showImageEditorWindow: boolean = true;

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

  toggleImageEditor(demoImage: DemoImageInterface){
    this.imageToEdit = demoImage;
    this.showImageEditorWindow = !this.showImageEditorWindow;
  }  
}
