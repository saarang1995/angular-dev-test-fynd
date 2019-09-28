import { Component, OnInit, Input, Output } from "@angular/core";
import { DemoImageInterface } from "src/app/interfaces/demo-image-intf";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.scss"]
})
export class ImageCardComponent implements OnInit {
  @Input() demoImage: DemoImageInterface;
  @Output() imageEditTrigger = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}
}
