// 11-home-work

const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];


const addProduct = (productsList) =>{

  const container = document.createElement("div")

  productsList.forEach((product) => {
    const productContent = document.createElement('div');
    const productTitle = document.createElement('h2');
    const productPretitle = document.createElement('h3');
    const productPropList = document.createElement('ul');

      product.properties.forEach((prop) => {
        const listItem = document.createElement('li')

        listItem.innerText = prop;

        productPropList.append(listItem)

      })

      productTitle.innerText = product.name;
      productPretitle.innerText = product.brand

      productContent.append(productTitle, productPretitle, productPropList)

      container.append(productContent)
    
  });

  document.body.append(container)
} 

addProduct(products)


// const addProduct = (productsList) => {

//   const container = document.createElement('div')

//   container.innerHTML = `
//     ${productsList
//       .map((prod) => {
//         return `
//         <h2>${prod.name}</h2>
//         <h3>${prod.brand}</h3>
//         <ul>
//           ${prod.properties
//             .map((prop) => {
//               return `
//                 <li>
//                   ${prop}
//                 </li>
//               `
//             })

//           .join('')}  
                   
//         </ul>
//         `
//         })
//       .join('')}
  
//   `

//   document.body.append(container)
// }