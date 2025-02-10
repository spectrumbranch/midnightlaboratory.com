// store logo images
import SpotifyStoreImageUrl from 'assets/store/spotify.png';
import AppleMusicStoreImageUrl from 'assets/store/apple-music.svg';
import AmazonStoreImageUrl from 'assets/store/amazon.png';
import YouTubeStoreImageUrl from 'assets/store/youtube.png';
import IHeartRadioStoreImageUrl from 'assets/store/iHeartRadio.png';
import DeezerStoreImageUrl from 'assets/store/deezer.svg';
import KKBoxStoreImageUrl from 'assets/store/kkbox.png';
import TidalStoreImageUrl from 'assets/store/tidal.png';

// album cover art images
import VGMACCV1AlbumArtUrl from 'assets/vgm-acc-volume-i-cover-notext.png';
import AnamnesisAlbumArtUrl from 'assets/anamnesis.png';
import CommissionsV1AlbumArtUrl from 'assets/commissions_volI.png';
import PotentFlaskAlbumArtUrl from 'assets/potent_flask.png';

export const VGMACCV1Key =
  'video-game-music-assorted-covers-collection-volume-i';
export const AnamnesisKey = 'anamnesis';
export const CommissionsV1Key = 'commissions-vol-i';
export const PotentFlaskKey = 'potent-flask';

export enum STORE_KEYS {
  SPOTIFY = 'spotify',
  APPLE_MUSIC = 'appleMusic',
  AMAZON = 'amazon',
  YOUTUBE = 'youTube',
  I_HEART_RADIO = 'iHeartRadio',
  DEEZER = 'deezer',
  KK_BOX = 'kkBox',
  TIDAL = 'tidal',
}

export type MusicStores = {
  [STORE_KEYS.SPOTIFY]: string;
  [STORE_KEYS.APPLE_MUSIC]: string;
  [STORE_KEYS.AMAZON]: string;
  [STORE_KEYS.YOUTUBE]: string;
  [STORE_KEYS.I_HEART_RADIO]?: string;
  [STORE_KEYS.DEEZER]: string;
  [STORE_KEYS.KK_BOX]?: string;
  [STORE_KEYS.TIDAL]: string;
};

export type StoreMeta = {
  name: string;
  image: string;
  url: string;
};

export type StoreMap = {
  [key in STORE_KEYS]: StoreMeta;
};

export const storeMeta: StoreMap = {
  [STORE_KEYS.SPOTIFY]: {
    name: 'Spotify',
    image: SpotifyStoreImageUrl,
    url: 'https://open.spotify.com/artist/4BnWfLuE1vryG09kvR2Ino',
  },
  [STORE_KEYS.APPLE_MUSIC]: {
    name: 'Apple Music',
    image: AppleMusicStoreImageUrl,
    url: 'https://music.apple.com/us/artist/midnight-laboratory/1265683496',
  },
  [STORE_KEYS.AMAZON]: {
    name: 'Amazon',
    image: AmazonStoreImageUrl,
    url: 'https://www.amazon.com/music/player/artists/B074F5PRG1/midnight-laboratory',
  },
  [STORE_KEYS.YOUTUBE]: {
    name: 'YouTube',
    image: YouTubeStoreImageUrl,
    url: 'https://www.youtube.com/@midnightlaboratorymusic',
  },
  [STORE_KEYS.I_HEART_RADIO]: {
    name: 'iHeart Radio',
    image: IHeartRadioStoreImageUrl,
    url: 'https://www.iheart.com/artist/midnight-laboratory-32799083/',
  },
  [STORE_KEYS.DEEZER]: {
    name: 'Deezer',
    image: DeezerStoreImageUrl,
    url: 'https://www.deezer.com/us/artist/12929179',
  },
  [STORE_KEYS.KK_BOX]: {
    name: 'KK Box',
    image: KKBoxStoreImageUrl,
    url: 'https://www.kkbox.com/hk/tc/artist/WoKuhvPmMb0q42PW2C',
  },
  [STORE_KEYS.TIDAL]: {
    name: 'Tidal',
    image: TidalStoreImageUrl,
    url: 'https://tidal.com/browse/artist/8985784',
  },
};

export type AlbumTrack = {
  name: string;
  feat?: string;
};

export type AlbumMap = {
  [albumId: string]: {
    image: string;
    title: string;
    stores: MusicStores;
    trackList: Array<AlbumTrack>;
  };
};

export type ArtistMeta = {
  stores: MusicStores;
};

export type AlbumDisplayOrder = string[];
export type StoreDisplayOrder = STORE_KEYS[];

export const albumDisplayOrder: AlbumDisplayOrder = [
  VGMACCV1Key,
  AnamnesisKey,
  CommissionsV1Key,
  PotentFlaskKey,
];

export const storeDisplayOrder: StoreDisplayOrder = [
  STORE_KEYS.SPOTIFY,
  STORE_KEYS.APPLE_MUSIC,
  STORE_KEYS.AMAZON,
  STORE_KEYS.YOUTUBE,
  STORE_KEYS.I_HEART_RADIO,
  STORE_KEYS.DEEZER,
  STORE_KEYS.KK_BOX,
  STORE_KEYS.TIDAL,
];

export const artistMeta: ArtistMeta = {
  stores: {
    [STORE_KEYS.SPOTIFY]:
      'https://open.spotify.com/artist/4BnWfLuE1vryG09kvR2Ino',
    [STORE_KEYS.APPLE_MUSIC]:
      'https://music.apple.com/us/artist/midnight-laboratory/1265683496',
    [STORE_KEYS.AMAZON]:
      'https://www.amazon.com/music/player/artists/B074F5PRG1/midnight-laboratory',
    [STORE_KEYS.YOUTUBE]: 'https://www.youtube.com/@midnightlaboratorymusic',
    [STORE_KEYS.I_HEART_RADIO]:
      'https://www.iheart.com/artist/midnight-laboratory-32799083/',
    [STORE_KEYS.DEEZER]: 'https://www.deezer.com/us/artist/12929179',
    [STORE_KEYS.KK_BOX]:
      'https://www.kkbox.com/hk/tc/artist/WoKuhvPmMb0q42PW2C',
    [STORE_KEYS.TIDAL]: 'https://tidal.com/browse/artist/8985784',
  },
};

export const albumMap: AlbumMap = {
  // TODO: Potent Flask and Commissions Volume I are missing from Deezer
  /**
   * Grand Slam (feat. Eggrollbuddy)
   *
   * SPOTIFY: https://open.spotify.com/album/6jZGXYfED5ERx9EoaFbd66
   * APPLE_MUSIC: https://music.apple.com/us/album/grand-slam-feat-eggrollbuddy-single/1763858821
   * AMAZON: https://www.amazon.com/music/player/albums/B0DDJLQX6T
   * YOUTUBE: https://www.youtube.com/watch?v=-pLNYKyER6c&list=OLAK5uy_lmLNb9hy6eH7i93H-ej-zdRzhqlCUe6zM
   * I_HEART_RADIO: https://www.iheart.com/artist/midnight-laboratory-32799083/albums/grand-slam-feat-eggrollbuddy-284591149/
   * DEEZER:  https://www.deezer.com/en/album/631095061
   * TIDAL: https://tidal.com/browse/album/381948801?u
   */
  [VGMACCV1Key]: {
    image: VGMACCV1AlbumArtUrl,
    title: 'Video Game Music Assorted Covers Collection Volume I',
    trackList: [
      { name: 'JENOVA', feat: '(From "Final Fantasy VII")' },
      { name: "Guile's Theme", feat: '(From "Super Street Fighter II")' },
      {
        name: 'The Man with the Machine Gun',
        feat: '(From "Final Fantasy VIII")',
      },
      { name: 'Battle at the Big Bridge', feat: '(From "Final Fantasy V")' },
      { name: 'Rex Incognito', feat: '(From "Genshin Impact")' },
      {
        name: 'Title Theme',
        feat: '(From "The Legend of Zelda: Ocarina of Time")',
      },
      { name: "Tifa's Theme", feat: '(From "Final Fantasy VII")' },
      {
        name: 'Song of Storms',
        feat: '(From "The Legend of Zelda: Ocarina of Time")',
      },
      { name: 'Letter From Ajax', feat: '(From "Genshin Impact")' },
      { name: 'A Fleeting Dream', feat: '(From "Final Fantasy X")' },
      {
        name: 'Bramble Blast',
        feat: '(From "Donkey Kong Country 2: Diddy\'s Kong Quest")',
      },
    ],
    stores: {
      [STORE_KEYS.SPOTIFY]:
        'https://open.spotify.com/album/1gqtGt2BgBYSQ9GZC9gy9K',
      [STORE_KEYS.APPLE_MUSIC]:
        'https://music.apple.com/us/album/video-game-music-assorted-covers-collection-volume-i/1740205899',
      [STORE_KEYS.AMAZON]:
        'https://www.amazon.com/Video-Music-Assorted-Covers-Collection/dp/B0D16K81GM',
      [STORE_KEYS.YOUTUBE]:
        'https://www.youtube.com/watch?v=X3uNMUuWaeo&list=PLS4tRVpm3M9LHJfDPZP45rrNSO2hPTcou',
      // [STORE_KEYS.I_HEART_RADIO]: 'TODO', // none -- TODO exclude
      [STORE_KEYS.DEEZER]: 'https://www.deezer.com/en/album/570984081',
      [STORE_KEYS.KK_BOX]:
        'https://www.kkbox.com/hk/tc/album/P-vv6Ihjmaj9qo6qTG',
      [STORE_KEYS.TIDAL]: 'https://tidal.com/browse/album/356178936',
    },
  },
  [AnamnesisKey]: {
    image: AnamnesisAlbumArtUrl,
    title: 'Anamnesis',
    trackList: [{ name: 'Anamnesis' }],
    stores: {
      [STORE_KEYS.SPOTIFY]:
        'https://open.spotify.com/album/6McskjQTrhzTbKBr8h6aVQ',
      [STORE_KEYS.APPLE_MUSIC]:
        'https://music.apple.com/us/album/anamnesis-single/1713091401',
      [STORE_KEYS.AMAZON]:
        'https://www.amazon.com/music/player/albums/B0CLZ3XVRT',
      [STORE_KEYS.YOUTUBE]:
        'https://www.youtube.com/watch?v=ANzQsAloU1I&list=OLAK5uy_lmdJNVKVl91FQa99uOJSDzgZPY9HNbgy8',
      [STORE_KEYS.I_HEART_RADIO]:
        'https://www.iheart.com/artist/midnight-laboratory-32799083/albums/anamnesis-238932104/',
      [STORE_KEYS.DEEZER]: 'https://www.deezer.com/us/album/503556261',
      [STORE_KEYS.KK_BOX]:
        'https://www.kkbox.com/hk/tc/album/9ayy22yDUhQp9HnEc3',
      [STORE_KEYS.TIDAL]: 'https://tidal.com/browse/album/323471326',
    },
  },
  [CommissionsV1Key]: {
    image: CommissionsV1AlbumArtUrl,
    title: 'Commissions Volume I',
    trackList: [
      { name: 'Reveal' },
      { name: "Let's Go", feat: '(feat. koallabyninja)' },
      {
        name: 'Ripple of Intrigue',
      },
      { name: 'Electric Apparition' },
      { name: 'Star Lightning' },
      { name: 'Run it Back' },
      { name: 'Sand Ghost Vibes' },
      {
        name: 'Tea Time Sunshowers',
        feat: '(feat. Rachel Hirshan on flute)',
      },
      { name: 'Campfire Sunset' },
    ],
    stores: {
      [STORE_KEYS.SPOTIFY]:
        'https://open.spotify.com/album/7ssCZKB1rXKaZ45Yx7YzVj',
      [STORE_KEYS.APPLE_MUSIC]:
        'https://music.apple.com/us/album/commissions-volume-i/1583627492?uo=4',
      [STORE_KEYS.AMAZON]:
        'https://www.amazon.com/gp/product/B09F1PXY92/ref=dm_ws_sp_ps_dp',
      [STORE_KEYS.YOUTUBE]:
        'https://www.youtube.com/watch?v=OemnXDdA6qs&list=OLAK5uy_n30VXFeyADvysJlxcRyeJHfXvoJu-PITI',
      [STORE_KEYS.I_HEART_RADIO]:
        'https://www.iheart.com/artist/midnight-laboratory-32799083/albums/commissions-volume-i-143770437/',
      [STORE_KEYS.DEEZER]: 'https://www.deezer.com/us/album/255374512',
      [STORE_KEYS.KK_BOX]:
        'https://www.kkbox.com/hk/tc/album/4wEeWqhuM7ov70F814up009H-index.html',
      [STORE_KEYS.TIDAL]: 'https://tidal.com/browse/album/195884565',
    },
  },
  [PotentFlaskKey]: {
    image: PotentFlaskAlbumArtUrl,
    title: 'Potent Flask',
    trackList: [
      { name: 'Propagation' },
      { name: 'The Midnight Laboratory' },
      {
        name: 'Short and Sweet',
        feat: '(feat. Jonny Peroxide on electric guitar)',
      },
      { name: 'Potent Flask' },
      { name: 'Afterglow' },
      { name: 'Madness' },
      { name: 'Mellifluous Dream I' },
      {
        name: 'Mellifluous Dream II',
        feat: '(feat. Rachel Hirshan on flute)',
      },
      { name: 'Mellifluous Dream III' },
      { name: 'Realization' },
      { name: 'Rebuild' },
      { name: 'Reflection' },
      { name: 'Amorphous Victory' },
      { name: 'Seaside' },
    ],
    stores: {
      [STORE_KEYS.SPOTIFY]:
        'https://open.spotify.com/album/0uhbZw88pjQHESVgJPsMie',
      [STORE_KEYS.APPLE_MUSIC]:
        'https://itunes.apple.com/us/album/potent-flask/id1265928375?uo=4&amp;app=music&amp;at=1001lry3&amp;ct=dashboard',
      [STORE_KEYS.AMAZON]:
        'https://www.amazon.com/Potent-Flask-Midnight-Laboratory/dp/B074F9GMZC?SubscriptionId=AKIAJDS6FAHQ4U6KQBSQ&amp;tag=distrokid06-20&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B074F9GMZC/?tag=distrokid06-20',
      [STORE_KEYS.YOUTUBE]:
        'https://www.youtube.com/watch?v=BhUujJnAVQw&list=OLAK5uy_luY81C2AxRV62k94ZmdtKEKFBe2nZvX8Q',
      [STORE_KEYS.I_HEART_RADIO]:
        'https://www.iheart.com/artist/id-32799083/albums/id-69372558',
      [STORE_KEYS.DEEZER]: 'https://www.deezer.com/album/45555341',
      [STORE_KEYS.KK_BOX]:
        'https://www.kkbox.com/hk/tc/album/4Z8qitMIdcLLU0F2vKyL009H-index.html',
      [STORE_KEYS.TIDAL]: 'http://www.tidal.com/album/76914342',
    },
  },
};
