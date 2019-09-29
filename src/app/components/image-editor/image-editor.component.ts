import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DemoImageInterface } from "src/app/interfaces/demo-image-intf";

@Component({
  selector: "app-image-editor",
  templateUrl: "./image-editor.component.html",
  styleUrls: ["./image-editor.component.scss"]
})
export class ImageEditorComponent {
  @Input() imageData: DemoImageInterface;
  @Output() updateImage = new EventEmitter();
  @Output() closePopup = new EventEmitter();

  newImageSrc: string = "https://via.placeholder.com/300X150";

  setImage(event) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = event => {
      // called once readAsDataURL is completed
      this.newImageSrc = event.target.result as string;
    };
  }

  confirmUpdateImage() {
    this.imageData.image_url = this.newImageSrc;
    this.updateImage.next(this.imageData);
  }

  close(){
    this.closePopup.next();
  }
}
