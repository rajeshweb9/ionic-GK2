import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { VentureService } from 'src/app/shared/services/venture.service';

@Component({
  selector: 'app-ventures',
  templateUrl: './ventures.page.html',
  styleUrls: ['./ventures.page.scss'],
})
export class VenturesPage implements OnInit {
  listVenture:any=[];
  constructor(
    private ventureService: VentureService,
    private activatedRouterServices: ActivatedRoute,
    public routerServices: Router,
  ) { }

  ngOnInit() {
    this.listVentureData();
  }


  listVentureData(){
    this.ventureService.getVentureList().pipe(finalize(() => {
    })).subscribe((res: any) => {   
      this.listVenture = res;   
      if (res.statusCode === 200) {
        this.listVenture = res;
        console.log("listVenture", res);
      } 
    }); 
  } 

}
