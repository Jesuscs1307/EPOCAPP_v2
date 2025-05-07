const photos = {
  foto001: [
    'https://i.imgur.com/lKZJpHv.png',
  ],
  foto002: [
    'https://i.imgur.com/rAzTl5T.png',
  ],
  foto003: [
    'https://i.imgur.com/oIBt4fT.png',
  ],
};

function showPhotos() {
  const select = document.getElementById('scaleSelect');
  const gallery = document.getElementById('gallery');
  const selectedScale = select.value;

  gallery.innerHTML = '';

  if (selectedScale && photos[selectedScale]) {
    photos[selectedScale].forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      gallery.appendChild(img);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Object.values(photos).flat().forEach(url => {
    const img = new Image();
    img.src = url;
  });
});