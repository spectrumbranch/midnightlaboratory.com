type MusicStores = {
  spotify: string;
  appleMusic: string;
  amazon: string;
  youTube: string;
  iHeartRadio: string;
  deezer: string;
  kkBox?: string;
  tidal: string;
};

type AlbumMap = {
  [albumId: string]: {
    stores: MusicStores;
  };
};

const albumMap: AlbumMap = {
  potentFlask: {
    stores: {
      spotify: 'https://open.spotify.com/album/0uhbZw88pjQHESVgJPsMie',
      appleMusic:
        'https://itunes.apple.com/us/album/potent-flask/id1265928375?uo=4&amp;app=music&amp;at=1001lry3&amp;ct=dashboard',
      amazon:
        'https://www.amazon.com/Potent-Flask-Midnight-Laboratory/dp/B074F9GMZC?SubscriptionId=AKIAJDS6FAHQ4U6KQBSQ&amp;tag=distrokid06-20&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B074F9GMZC/?tag=distrokid06-20',
      youTube:
        'https://www.youtube.com/watch?v=BhUujJnAVQw&list=OLAK5uy_luY81C2AxRV62k94ZmdtKEKFBe2nZvX8Q',
      iHeartRadio:
        'https://www.iheart.com/artist/id-32799083/albums/id-69372558',
      deezer: 'https://www.deezer.com/album/45555341',
      kkBox:
        'https://www.kkbox.com/hk/tc/album/4Z8qitMIdcLLU0F2vKyL009H-index.html',
      tidal: 'http://www.tidal.com/album/76914342',
    },
  },
  commissionsVol1: {
    stores: {
      spotify: 'https://open.spotify.com/album/7ssCZKB1rXKaZ45Yx7YzVj',
      appleMusic:
        'https://music.apple.com/us/album/commissions-volume-i/1583627492?uo=4',
      amazon: 'https://www.amazon.com/gp/product/B09F1PXY92/ref=dm_ws_sp_ps_dp',
      youTube:
        'https://www.youtube.com/watch?v=OemnXDdA6qs&list=OLAK5uy_n30VXFeyADvysJlxcRyeJHfXvoJu-PITI',
      iHeartRadio:
        'https://www.iheart.com/artist/midnight-laboratory-32799083/albums/commissions-volume-i-143770437/',
      deezer: 'https://www.deezer.com/us/album/255374512',
      kkBox:
        'https://www.kkbox.com/hk/tc/album/4wEeWqhuM7ov70F814up009H-index.html',
      tidal: 'https://tidal.com/browse/album/195884565',
    },
  },
  anamnesis: {
    stores: {
      spotify: 'https://open.spotify.com/album/6McskjQTrhzTbKBr8h6aVQ',
      appleMusic:
        'https://music.apple.com/us/album/anamnesis-single/1713091401',
      amazon: 'https://www.amazon.com/music/player/albums/B0CLZ3XVRT',
      youTube:
        'https://www.youtube.com/watch?v=ANzQsAloU1I&list=OLAK5uy_lmdJNVKVl91FQa99uOJSDzgZPY9HNbgy8',
      iHeartRadio:
        'https://www.iheart.com/artist/midnight-laboratory-32799083/albums/anamnesis-238932104/',
      deezer: 'https://www.deezer.com/us/album/503556261',
      tidal: 'https://tidal.com/browse/album/323471326',
    },
  },
};

export default {
  getAlbumStoresById(albumId: string): MusicStores {
    return albumMap[albumId].stores;
  },
};
