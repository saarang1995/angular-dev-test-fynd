import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ImageDataInterface } from "src/app/interfaces/image-data-intf";
import { DatabaseService } from "src/app/services/database.service";

@Component({
  selector: "app-image-grid",
  templateUrl: "./image-grid.component.html",
  styleUrls: ["./image-grid.component.scss"]
})
export class ImageGridComponent implements OnInit {
  imageDataArray: ImageDataInterface[];
  imageData: ImageDataInterface;
  showImageEditorWindow: boolean = false;

  constructor(
    private apiService: ApiService,
    private databaseService: DatabaseService
  ) {
    this.databaseService.imageDataChangeEvent$.subscribe(
      () => (this.imageDataArray = this.databaseService.getImageData())
    );
  }

  ngOnInit(): void {
    this.apiService.fetchImageData();
  }

  toggleImageEditor(incomingImageData: ImageDataInterface){
    this.imageData = incomingImageData;
    this.showImageEditorWindow = !this.showImageEditorWindow;
  }

  triggerDeleteImage(imageToDelete: ImageDataInterface){
    const isDeletionConfirmed = window.confirm(`Are you sure you want to delete Image: ${imageToDelete.name}?`)
    if(!isDeletionConfirmed) return;
    const filteredImageDataArray = this.imageDataArray.filter(data => data.name !== imageToDelete.name);
    this.imageDataArray = filteredImageDataArray;
  }

  updateImage(updatedImageData: ImageDataInterface){
    const imageToUpdateIndex = this.imageDataArray.findIndex( data => data.name === updatedImageData.name);
    this.imageDataArray[imageToUpdateIndex] = updatedImageData;
    this.showImageEditorWindow = false;
  }

  closePopup(){
    this.showImageEditorWindow = false;
  }
}
