const productFooters = ['How it works','Features','Pricing','Testimonials'];
const productContainer = document.querySelector('#product-container');
const productItem = document.querySelector('.product-item');
productFooters.forEach((productFooter)=>productContainer.append(productList(productFooter)))

function productList(productFooter){  
  const clone = productItem.content.cloneNode(true);
 const products = clone.querySelector('.products');
 products.innerText = productFooter;
  return clone
}

const aboutFooters = ['Our Team','Careers','Press','Stores'];
const aboutContainer = document.querySelector('#about-container');
const aboutItem = document.querySelector('.about-item');
aboutFooters.forEach((aboutFooter)=>aboutContainer.append(aboutList(aboutFooter)))

function aboutList(aboutFooter){  
  const clone = aboutItem.content.cloneNode(true);
 const abouts = clone.querySelector('.abouts');
  abouts.innerText = aboutFooter;
  return clone
}