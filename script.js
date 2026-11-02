
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
const gallery = document.getElementById("artwork");
const title = document.getElementById("gallery-title");

doors.forEach((door) => {
  door.addEventListener("click", function(event) {
    event.preventDefault();

    const category = categories[this.dataset.type];

    if (!category) return;

    title.textContent = category.title;
    gallery.innerHTML = "";

    category.images.forEach((filename, index) => {
      const card = document.createElement("div");
      card.className = "artwork-card";

      const image = document.createElement("img");
      image.src = category.folder + filename;
      image.alt = category.title + " " + (index + 1);

      const caption = document.createElement("p");
      caption.textContent = category.title + " — " + (index + 1);

      image.onerror = function() {
        card.remove();

        if (gallery.children.length === 0) {
          gallery.textContent =
            "Artwork coming soon. Add your images to this folder.";
        }
      };

      card.appendChild(image);
      card.appendChild(caption);
      gallery.appendChild(card);
    });

    document.getElementById("gallery").scrollIntoView({
      behavior: "smooth"
    });
  });
});
