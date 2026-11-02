const categories = {
  vtuber: {
    title: "VTuber Model",
    folder: "assets/vtuber-model/",
    images: ["model-1.png", "model-2.png", "model-3.png"]
  },

  logo: {
    title: "Logo Designs",
    folder: "assets/logo/",
    images: ["logo-1.png", "logo-2.png", "logo-3.png"]
  },

  banner: {
    title: "Banner Designs",
    folder: "assets/banner/",
    images: ["banner-1.png", "banner-2.png", "banner-3.png"]
  },

  emotes: {
    title: "Emotes",
    folder: "assets/emotes/",
    images: ["emote-1.png", "emote-2.png", "emote-3.png", "emote-4.png"]
  },

  scene: {
    title: "Art Scene",
    folder: "assets/art-scene/",
    images: ["scene-1.png", "scene-2.png", "scene-3.png"]
  }
};

const doors = document.querySelectorAll(".door-card");

doors.forEach((door) => {
  const button = door.querySelector(".door-face");
  const gallery = door.querySelector(".inside-gallery");
  const category = categories[door.dataset.type];

  category.images.forEach((filename, index) => {
    const card = document.createElement("div");
    card.className = "artwork-card";

    const image = document.createElement("img");
    image.src = category.folder + filename;
    image.alt = category.title + " " + (index + 1);

    const caption = document.createElement("p");
    caption.textContent = category.title + " · " + (index + 1);

    image.onerror = () => card.remove();

    card.appendChild(image);
    card.appendChild(caption);
    gallery.appendChild(card);
  });

  button.addEventListener("click", () => {
    const isAlreadyOpen = door.classList.contains("active");

    doors.forEach((otherDoor) => {
      otherDoor.classList.remove("active");
      otherDoor.querySelector(".door-face").setAttribute("aria-expanded", "false");
    });

    if (!isAlreadyOpen) {
      door.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("aria-expanded", "false");
    }
  });

  button.setAttribute("aria-expanded", "false");
});
