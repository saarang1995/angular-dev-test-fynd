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
  imageData: DemoImageInterface;
  showImageEditorWindow: boolean = false;

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

  toggleImageEditor(demoImageData: DemoImageInterface){
    this.imageData = demoImageData;
    this.showImageEditorWindow = !this.showImageEditorWindow;
  }

  triggerDeleteImage(imageToDelete: DemoImageInterface){
    const isDeletionConfirmed = window.confirm(`Are you sure you want to delete Image: ${imageToDelete.name}?`)
    if(!isDeletionConfirmed) return;
    const filteredDemoImages = this.demoImages.filter(data => data.name !== imageToDelete.name);
    this.demoImages = filteredDemoImages;
  }

  updateImage(updatedImageData: DemoImageInterface){
    const imageToUpdateIndex = this.demoImages.findIndex( data => data.name === updatedImageData.name);
    this.demoImages[imageToUpdateIndex] = updatedImageData;
    this.showImageEditorWindow = false;
  }

  closePopup(){
    this.showImageEditorWindow = false;
  }
}
