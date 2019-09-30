import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { ImageDataInterface } from "../interfaces/image-data-intf";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor() {}

  private imageData: ImageDataInterface[];

  private imageDataChangeEvent: Subject<null> = new Subject<null>();
  imageDataChangeEvent$: Observable<
    null
  > = this.imageDataChangeEvent.asObservable();

  setImageData(data: ImageDataInterface[]) {
    this.imageData = data;
    this.imageDataChangeEvent.next();
  }

  getImageData(): ImageDataInterface[] {
    return this.imageData;
  }
}
