import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  editingProduct: Product;
  editing: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;

    });
  }

  editProduct(event, product){

      this.editingProduct = product;
      this.editing = !this.editing;
  }
    updateProduct(){
      this.productService.updateProduct(this.editingProduct);
      this.editingProduct = {} as Product;
      this.editing = false;
    }

  deleteProduct(event, product){
    if(confirm('Are you sure about deleting this item?')) {
      // console.log(product);
    this.productService.deleteProduct(product);
    }

  }

}
