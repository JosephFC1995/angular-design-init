import { Component, OnInit } from '@angular/core';
import { faEye, faBullseye, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faEye = faEye;
  faBullseye = faBullseye;
  faBars = faBars;
  faTimes = faTimes;
  now;
  menuMovil;

  constructor() {
    this.menuMovil = false
    this.now = moment().lang("es");
  }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.menuMovil = true
  }
  closeMenu(): void {
    this.menuMovil = false
  }

  slides = [
    {
      img: "assets/images/almacen-1.jpg",
      style: {
        'background-color': 'rgb(55 62 104 / 60%)'
      },
      title: 'Misión',
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, aperiam. Accusantium aperiam
      porro eos optio labore. Nobis laboriosam labore eum repellat reprehenderit praesentium quos
      optio, natus officia, libero nisi! Officiis, pariatur. Maiores fuga nam nemo quae itaque sunt ut
      illum et quam! Delectus, modi a!` ,
      ico: faEye
    },
    {
      img: "assets/images/almacen-2.jpg",
      style: {
        'background-color': 'rgb(194 182 83 / 60%)'
      },
      title: 'Visión',
      detail: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, aperiam. Accusantium aperiam
      porro eos optio labore. Nobis laboriosam labore eum repellat reprehenderit praesentium quos
      optio, natus officia, libero nisi! Officiis, pariatur. Maiores fuga nam nemo quae itaque sunt ut
      illum et quam! Delectus, modi a!` ,
      ico: faBullseye
    },
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  productos = [
    {
      exclusive: true,
      image: 'assets/images/producto-1.png',
      name: 'Coca-Cola 3L',
      price: '7.99',
      regularPrice: '10.00',
      footer: `Precio válido del 20 al 27 de Agosto y/o hasta agotar stock.
      Precio sujeto a variaciones sin previo aviso`
    },
    {
      exclusive: true,
      image: 'assets/images/producto-1.png',
      name: 'Coca-Cola 3L',
      price: '7.99',
      regularPrice: '10.00',
      footer: `Precio válido del 20 al 27 de Agosto y/o hasta agotar stock.
      Precio sujeto a variaciones sin previo aviso`
    },
    {
      exclusive: true,
      image: 'assets/images/producto-1.png',
      name: 'Coca-Cola 3L',
      price: '7.99',
      regularPrice: '10.00',
      footer: `Precio válido del 20 al 27 de Agosto y/o hasta agotar stock.
      Precio sujeto a variaciones sin previo aviso`
    },
    {
      exclusive: true,
      image: 'assets/images/producto-1.png',
      name: 'Coca-Cola 3L',
      price: '7.99',
      regularPrice: '10.00',
      footer: `Precio válido del 20 al 27 de Agosto y/o hasta agotar stock.
      Precio sujeto a variaciones sin previo aviso`
    },
    {
      exclusive: true,
      image: 'assets/images/producto-1.png',
      name: 'Coca-Cola 3L',
      price: '7.99',
      regularPrice: '10.00',
      footer: `Precio válido del 20 al 27 de Agosto y/o hasta agotar stock.
      Precio sujeto a variaciones sin previo aviso`
    },
    {
      exclusive: true,
      image: 'assets/images/producto-1.png',
      name: 'Coca-Cola 3L',
      price: '7.99',
      regularPrice: '10.00',
      footer: `Precio válido del 20 al 27 de Agosto y/o hasta agotar stock.
      Precio sujeto a variaciones sin previo aviso`
    }
  ]

}
