import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ImageDataInterface } from "src/app/interfaces/image-data-intf";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.scss"]
})
export class ImageCardComponent {
  @Input() imageData: ImageDataInterface;
  @Output() toggleImageEditor = new EventEmitter();
  @Output() triggerDeleteImage = new EventEmitter();

  showEditor() {
    this.toggleImageEditor.next(this.imageData);
  }
  deleteImage(){
    this.triggerDeleteImage.next(this.imageData);
  }
}
