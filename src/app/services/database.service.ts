import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { DemoImageInterface } from "../interfaces/demo-image-intf";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor() {}

  private demoImagesData: DemoImageInterface[];

  private demoImagesDataChangeEvent: Subject<null> = new Subject<null>();
  demoImagesDataChangeEvent$: Observable<
    null
  > = this.demoImagesDataChangeEvent.asObservable();

  setDemoImagesData(data: DemoImageInterface[]) {
    this.demoImagesData = data;
    this.demoImagesDataChangeEvent.next();
  }

  getDemoImagesData(): DemoImageInterface[] {
    return this.demoImagesData;
  }
}
