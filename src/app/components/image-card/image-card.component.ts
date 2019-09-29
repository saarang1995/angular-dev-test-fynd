import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DemoImageInterface } from "src/app/interfaces/demo-image-intf";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.scss"]
})
export class ImageCardComponent implements OnInit {
  @Input() demoImage: DemoImageInterface;
  @Output() toggleImageEditor = new EventEmitter();
  

  constructor() {}

  ngOnInit() {}

  showEditor() {
    this.toggleImageEditor.next(this.demoImage);
  }
}
