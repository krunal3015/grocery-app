import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product: any;
  _id: any;

  constructor(private dataService: DataService, private activateRoute : ActivatedRoute) { 

    this._id = this.activateRoute.snapshot.paramMap.get('id');

      this.dataService.getProductById(this._id).subscribe(response => {
        this.product = response.data;
      })
  }

  ngOnInit(): void {
  }

}
