import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolvedModel } from 'src/app/core/interfaces/resolved-model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss', '../../../../styles.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  error: boolean = false;
  errorMessage: string = "";
  constructor(private route: ActivatedRoute) {
    const data: ResolvedModel<Product> = this.route.snapshot.data['data'];
    this.error = data.error != null;
    if(this.error) {
      this.errorMessage = data.error;
      return;
    }

    this.product.fromJson(data.model);
  }

  ngOnInit(): void {
  }

}
