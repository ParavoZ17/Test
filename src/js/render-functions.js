




const galleryItems = images.map(imgItem => {
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


  export default {
    createImgCard,
  };    