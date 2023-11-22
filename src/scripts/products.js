const products = [
  {
    id: "1",
    name: "Special",
    description:
      "Energize with our nutritioud healthy salad,burrsting with fresh greens and vibrant super foods",
    ratings: 2.3,
    reviews: 25,
    price: "$100",
    available: "+110",
    image: "../assets/image 1.png",
    tag: "hot items",
  },
  {
    id: "2",
    name: "Healthy Salad",
    description:
      "Energize with our nutritioud healthy salad,burrsting with fresh greens and vibrant super foods",
    ratings: 4.1,
    reviews: 50,
    price: "$50",
    available: "+70",
    image: "../assets/image 2.png",
  },
  {
    id: "3",
    name: "Korean Set",
    description:
      "Energize with our nutritioud healthy salad,burrsting with fresh greens and vibrant super foods",
    ratings: 3.5,
    reviews: 50,
    price: "$150",
    available: "+50",
    tag: "new items",
    image: "../assets/image 6.png",
  },
];
const cardContainer = document.querySelector("#card-container");
const cardTemplate = document.querySelector(".card");

products.forEach((product) => cardContainer.append(createProduct(product)));

function createProduct(product) {
  const clone = cardTemplate.content.cloneNode(true);
  const image = clone.querySelector("img");
  const heading = clone.querySelector("h3");
  const description = clone.querySelector("p");
  const price = clone.querySelector(".price");
  const available = clone.querySelector(".available");
  const rating = clone.querySelector(".rating");
  const review = clone.querySelector(".review");
  const stars = clone.querySelector(".stars");

  image.src = product.image;
  image.setAttribute("alt", product.name);
  heading.innerText = product.name;
  description.innerText = product.description;
  price.innerText = product.price;
  available.innerText = product.available + "Availble";
  rating.innerText = product.ratings + " |";
  review.innerText = product.reviews + " Reviews";
  stars.innerHTML = createStars(Math.round(product.ratings));

  if (product.tag) {
    const tagElem = document.createElement("div");
    tagElem.setAttribute("class", "");
    tagElem.className = "btn-secondary absolute top-28 right-0";
    tagElem.innerText = product.tag.toUpperCase();
    clone.querySelector(".tag").appendChild(tagElem);
  }
  return clone;
}

function createStars(rating) {
  let stars = "";
  let temp = "";
  for (i = 1; i <= 5; i++) {
    if(i <= rating){
      if(Math.round(rating) === rating + 1 ){ 
        temp = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6  fill-yellow-400" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"/></svg>`
      }
     else{
      temp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  fill-yellow-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>`;
     }
      
    }else{
      temp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>`;
    }
    
    stars += temp;
  }
  return stars;
}
