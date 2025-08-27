const musicas = document.querySelectorAll('.musica');
const albuns = document.querySelectorAll('.album');

musicas.forEach(musica => {
  musica.addEventListener('dragstart', dragStart);
});

albuns.forEach(album => {
  album.addEventListener('dragover', dragOver);
  album.addEventListener('drop', drop);
  album.addEventListener('dragleave', dragLeave);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('over');
}

function dragLeave(e) {
  e.currentTarget.classList.remove('over');
}

function drop(e) {
  e.preventDefault();
  const musicaId = e.dataTransfer.getData('text/plain');
  const musica = document.getElementById(musicaId);
  const albumName = e.currentTarget.getAttribute('data-name');
  const musicaAlbum = musica.getAttribute('data-album');

  e.currentTarget.classList.remove('over');

  if (albumName === musicaAlbum) {
    e.currentTarget.appendChild(musica);
    musica.style.position = "relative";
    musica.style.top = "0";
    musica.style.left = "0";
    e.currentTarget.classList.add('correct');
    setTimeout(() => {
      e.currentTarget.classList.remove('correct');
    }, 1000);
  } else {
    // Volta para posição original
    document.querySelector('.musicas').appendChild(musica);
  }
}
if (albumName === musicaAlbum) {
  e.currentTarget.appendChild(musica);
  musica.style.position = "relative";
  musica.style.top = "0";
  musica.style.left = "0";

  // 💡 Desativa o arraste após acerto
  musica.setAttribute('draggable', 'false');

  e.currentTarget.classList.add('correct');
  setTimeout(() => {
    e.currentTarget.classList.remove('correct');
  }, 1000);
}
if (albumName === musicaAlbum) {
  e.currentTarget.appendChild(musica);

  // Remove position styles (se estiver usando antes)
  musica.style.position = "static";
  musica.style.top = null;
  musica.style.left = null;

  // Impede que a música seja arrastada novamente
  musica.setAttribute('draggable', 'false');

  e.currentTarget.classList.add('correct');
  setTimeout(() => {
    e.currentTarget.classList.remove('correct');
  }, 1000);
}
