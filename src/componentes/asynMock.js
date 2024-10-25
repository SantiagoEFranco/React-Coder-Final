const products = [
    {
       id: 1,
    title:'Kawazaki klx 300',
    price:'9000',
    categoryId:'Kawazaki',
    category:'Enduro', 
    stock : 5,
    year:'2023',
    description : 'La KLX®300 es una motocicleta deportiva dual, liviana y muy versátil que continúa adelante cuando el camino termina.',
    image:'https://kawasaki.ar/es/wp-content/uploads/2024/01/e6465ab8-56da-43cf-9f94-ec48fe4828d1.png',
},
{
    id: 2,
 title:'Honda Tornado 250',
 price:'6500',
 categoryId:'Honda',
 category:'Enduro', 
 stock : 6,
 year:'2024', 
 description : 'El diseño icónico de la XR250 Tornado transmite sensaciones de adrenalina y aventura que la convierten en la referente indiscutida del segmento On/Off.',
 image:'https://motos.honda.com.ar/uploads/modelos/28/images/sliders/115_0s-0115-0s-0img-xr250-diseno.jpg',
},
{
    id: 3,
 title:'Yamaha Fz v3.0',
 price:'5200',
 categoryId:'Yamaha',
 category:'naked', 
 stock : 4,
 year:'2023', 
 description : 'La nueva FZ-S FI V3.0 llega con una propuesta de diseño robusta, para reconquistar las calles con su estilo de nueva generación.',
 image:'https://www.yamaha-motor.com.ar/images/productos//colores/b474d4dd64246ccbea958e42b7ddd287.jpg',
},
{
    id: 4,
 title:'Yamaha YZ 450',
 price:'11000',
 categoryId:'Yamaha',
 category:'Enduro',
 stock : 5,
 year:'2022',  
 description : 'Más potente, más ligero, más delgado, con una estabilidad general mejorada y más agilidad que nunca. Porque el mejor no descansar.',
 image:'https://yamahamotorsports.com/media/images_products/2025-yz450f-25/1200px/11-2025-YZ450FSL-DPBSE-US-11-YY-18.JPG.webp',
},
{
    id: 5,
 title:'Honda CRF 450R',
 price:'10000',
 categoryId:'Honda',
 category:'Enduro',
 stock : 7,
 year:'2024',  
 description : 'El propulsor monocilíndrico de 450cc, asociado a una transmisión de 5 velocidades',
 image:'https://motos.honda.com.ar/uploads/modelos/59/images/colores/59c-064c-0color.jpg',
},
{
  id: 6,
title:'Kawazaki Z400',
price:'11000',
categoryId:'Kawazaki',
category:'Naked',
stock : 2,
year:'2024',  
description : 'La Z400, el modelo más nuevo de la serie Z de Kawasaki, se ha diseñado para ser una auténtica Supernaked. ',
image:'https://kawasaki.ar/es/wp-content/uploads/2022/07/FA-2022-06-30-053744.png',
},
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

 
  
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id === parseInt(id, 10));
  };
 
  
  export const getCategory = (category) => {
    return products.filter((product) => product.categoryId === category);
    
  };

  export async function getProds() {
    const response = await fetch('https://gist.githubusercontent.com/SantiagoEFranco/c6a89b4678e64308f31b3728711f45bb/raw/a62d642c804a2d6af900ae632424226181cff5c3/gistfile1.txt');
    const data = await response.json();
    return data;
  }


  