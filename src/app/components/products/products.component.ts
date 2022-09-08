import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  catId: any;

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute, private router: Router) {

      this.catId = this.activateRoute.snapshot.paramMap.get('id');
      
     this.dataService.getProductByCatId(this.catId).subscribe(response => {
      this.products= response.data
    })
  
  }
    
  onButtonClick(product: any){
    this.router.navigate(['/product-details', product._id]);
  }


  ngOnInit(): void {
  }

}
