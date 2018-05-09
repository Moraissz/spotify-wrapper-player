import spotify from './Spotify';
import renderAlbum from './AlbumList';
import renderAlbumInfo from './AlbumInfo';


const albums = spotify.search.albums('Incubus');
const albumsList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');


albums.then(data => renderAlbum(data.albums.items, albumsList));
album.then(data => renderAlbumInfo(data, albumInfo));
