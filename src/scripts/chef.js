const chefs =[
  {
    id : 1,
    name : 'David james',
    image : '../../assets/Ellipse 5.png'
  },
  {
    id : 2,
    name : 'Ella Wendy',
    image : '../../assets/Ellipse 6.png'
  },
  {
    id : 3,
    name : 'Robert Allen',
    image : '../../assets/Ellipse 7.png'
  }
]
const cardContainer = document.querySelector('#card-container');
const cardTemp = document.querySelector('.card');

chefs.forEach((chef) => cardContainer.append(createChef(chef)));
function createChef(chef){
  const clone = cardTemp.content.cloneNode(true);
  const img = clone.querySelector('img');
  const name = clone.querySelector('h3');
  img.src = chef.image;
  img.setAttribute('alt',chef.name);
  name.innerText = chef.name;
  return clone;
}