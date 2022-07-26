import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class Product {
  watch:any ;
  constructor(private router:ActivatedRoute) {

  }
  ngOnInit(){
    this.watch = this.router.snapshot.paramMap.get('id');
    console.log(this.watch);

  }
}
