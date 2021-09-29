import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { MiscService } from "../../../services/misc.service";


@Component({
  selector: "app-map-home",
  templateUrl: "./map-home.page.html",
  styleUrls: ["./map-home.page.scss"],
})
export class MapHomePage implements OnInit {
  


  constructor(
    public mapService: MiscService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router
  ) {}

  ngOnInit() {

  }

}
