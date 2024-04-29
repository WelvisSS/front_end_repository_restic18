import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartComponent {
  products: Array<any> = [

    {
      id: 1,
      name: "Jaqueta Jeans",
      price: 59.99,
      imgURL: "https://a-static.mlcdn.com.br/450x450/jaqueta-jeans-masculina-azul-premium-fit-alto-padrao-tlt-modas/tltmodas/12043231221/cb8843c4f5d7492dfe088d1e9721c1d6.jpeg"
    },
    {
      id: 2,
      name: "Sapatilha Vermelha",
      price: 29.99,
      imgURL: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/sapatoan/catalog/ref200-verniz-vermelho-3.JPG"
    },
    {
      id: 4,
      name: "Camisa Polo",
      price: 29.99,
      imgURL: "https://iguatemi365.vtexassets.com/arquivos/ids/464596/VIL_220502_003_0018-00.jpg?v=638152949293500000"
    },
    {
      id: 5,
      name: "Bermuda Chino",
      price: 24.99,
      imgURL: "https://cdn.sistemawbuy.com.br/arquivos/0e4b2317d0769f53028ed4357cc04bc1/produtos/6515e9d46ce5c/15bm009-86-01-6564b1867c377.jpg"
    },
    {
      id: 6,
      name: "Suéter Azul",
      price: 34.99,
      imgURL: "https://images.tcdn.com.br/img/img_prod/914261/sueter_masculino_azul_escuro_1623_2_c94963d915f152a1b381af236e4ca6d2.jpg"
    },
    {
      id: 7,
      name: "Bolsa de Couro",
      price: 59.99,
      imgURL: "https://cdn.awsli.com.br/600x450/485/485894/produto/48612503c4a4e088ff.jpg"
    },
    {
      id: 8,
      name: "Boné de Beisebol",
      price: 14.99,
      imgURL: "https://images.tcdn.com.br/img/img_prod/868639/bone_baseball_3_1_20201022155839.jpg"
    }
  ];



  cart = signal<Item[]>([]);

  precoTotal = computed(() => {
    return this.cart().reduce((acc, item) => acc + (item.price * item.quantity), 0);
  });

  addItem(product: any) {
    let productIsAlreadyInCart = this.cart().some(
      item => item.id === product.id
    )

    console.log(productIsAlreadyInCart)

    if (!productIsAlreadyInCart) {
      this.cart.update(values => [...values, { ...product, quantity: 1 }]);
    } else {
      this.cart.set(this.cart().map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    }
  }

  removeItem(id: any) {
    this.cart.set(this.cart().filter((item) => item.id !== id));
  }
}
