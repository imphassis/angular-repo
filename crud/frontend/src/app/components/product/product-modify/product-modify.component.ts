import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {
  product: Product | any;
  routeId: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routeId = params;
    });
    this.productService.read().subscribe(data => {
      this.product = data.find(el => el.id === Number(this.routeId.id));
    });
  }

  updateProduct(product: Product) {
    this.productService.update(product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
