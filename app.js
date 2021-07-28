const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
  buttonClose: document.querySelector('[data-action="close-lightbox"]'),
};

const createGalleryElement = (galleryItems) => {
  return galleryItems.map((galleryItem) => {
    const imagesItemEl = document.createElement("li");
    imagesItemEl.classList.add("gallery__item");
    const imagesLinkEl = document.createElement("a");
    imagesLinkEl.classList.add("gallery__link");
    imagesLinkEl.href = `${galleryItem.original}`;
    imagesLinkEl.insertAdjacentHTML(
      "afterbegin",
      `<img class= "gallery__image" src = ${galleryItem.preview} data-source = ${galleryItem.original} alt = ${galleryItem.description} width = 100%>`
    );
    imagesItemEl.appendChild(imagesLinkEl);
    return imagesItemEl;
  });
};
const elements = createGalleryElement(galleryItems);
refs.gallery.append(...elements);
// console.log(...elements);

refs.gallery.addEventListener("click", onOpenLightbox);
refs.buttonClose.addEventListener("click", onCloseLightbox);
refs.overlay.addEventListener("click", onOverlayClick);

function onOpenLightbox(e) {
  e.preventDefault();
  window.addEventListener("keydown", closeLightboxESC);
  if (e.target.localName === "img") {
    refs.lightbox.classList.add("is-open");
    refs.lightboxImage.setAttribute("src", e.target.dataset.source);
    refs.lightboxImage.setAttribute("alt", e.target.alt);
  }
}

function onCloseLightbox() {
  window.removeEventListener("keydown", closeLightboxESC);
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.removeAttribute("src");
  refs.lightboxImage.removeAttribute("alt");
}

function closeLightboxESC(e) {
  if (e.key !== "Escape") {
    return;
  }
  onCloseLightbox();
}

function onOverlayClick(e) {
  if (e.currentTarget !== e.target) {
    onCloseLightbox();
  }
}
//  refs.gallery.addEventListener("click", toggleLightbox);
//  refs.buttonClose.addEventListener("click", toggleLightbox);
//  window.addEventListener("keyup", closeLightboxESC);

// function closeLightboxESC(e) {
//   if (e.key !== "Escape") {
//     return;
//   }
//      toggleLightbox();
//    }
//   function toggleLightbox() {
//      refs.lightbox.classList.toggle("is-open");
//   }
