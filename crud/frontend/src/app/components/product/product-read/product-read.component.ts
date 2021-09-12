import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] | any;

  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!');
      window.location.reload();
    });
  }
}
