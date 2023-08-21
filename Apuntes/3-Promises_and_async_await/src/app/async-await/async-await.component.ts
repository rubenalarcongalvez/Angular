import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent {
  results: any = [];

  products = [
    {
      name: "Gaming Latpop",
      brand: "Asus",
      price: 1200
    },
    {
      name: "Tablet",
      brand: "Samsung",
      price: 300
    },
    {
      name: "Reflex Camera",
      brand: "Asus",
      price: 650
    },
  ]

  getProducts() {
    return new Promise((resolve, reject) => {
      console.log("Loading products...");

      setTimeout(() => {
        if (this.products) {
          let temp_str = "";
          let finalProducts: string[] = [];
          this.products.forEach((product) => {
            temp_str = "Name: " + product.name + "\t"
            temp_str += "Brand: " + product.brand + "\t"
            temp_str += "Price: " + product.price
            
            finalProducts.push(temp_str);
          })
          
          resolve(finalProducts);
        } else {
          reject(Error("There are not products"));
        }
      }, 3000);
    });
  }

  // NORMAL METHOD
  // seeProducts() {
  //   this.getProducts().then(data => {
  //     this.result = data;
  //   }).catch((error) => {
  //     this.result = error;
  //   }).finally(() => {
  //     setTimeout(() => {
  //       //We can clear it
  //       this.result = undefined;
  //     }, 5000);
  //   });
  // }

  //ASYNC-AWAIT METHOD
  //We always have to use await INSIDE of async functions
  async seeProducts() {
    //We await this item to load (and we assign it to a variable or use it, because it RETURNS something, the resolve or reject)
    this.results = await this.getProducts();
    //As we cannot use finally, we execute other code here
    setTimeout(() => {
      //We can clear it
      this.results = [];
    }, 10000);
  }
}
