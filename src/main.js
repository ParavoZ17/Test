import pixabayApi from "./js/pixabay-api";
const input = document.querySelector('.searchImages');
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const container = document.querySelector('.container')


let text = "";

form.addEventListener("submit", (e) => {
e.preventDefault();

  text = input.value;
  console.log(text);
  const data = pixabayApi.getImages(text).then(data=>{
  const {hits} = data;
  console.log(hits);
  const galleryItems = hits.map(imgItem => {
    const item = document.createElement('li');
    item.classList.add('gallery-item');
    const link = document.createElement('a');
    link.classList.add('gallery-link');
    link.href = imgItem.largeImageURL;
    const img = document.createElement('img');
    img.src = imgItem.webformatURL;
    img.alt = imgItem.tags;
    img.classList.add('gallery-image');
    link.appendChild(img);
    item.appendChild(link);
    return item;
  });
  
  gallery.append(...galleryItems);
  
});
});

