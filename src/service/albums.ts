// store logo images
import SpotifyStoreImageUrl from 'assets/store/spotify.png';
import AppleMusicStoreImageUrl from 'assets/store/apple-music.svg';
import AmazonStoreImageUrl from 'assets/store/amazon.png';
import YouTubeStoreImageUrl from 'assets/store/youtube.png';
import TidalStoreImageUrl from 'assets/store/tidal.png';

// album cover art images
import VGMACCV1AlbumArtUrl from 'assets/vgm-acc-volume-i.png';
import VGMACCV2AlbumArtUrl from 'assets/vgm-acc-volume-ii.png';
import AnamnesisAlbumArtUrl from 'assets/anamnesis.png';
import CommissionsV1AlbumArtUrl from 'assets/commissions_volI.png';
import PotentFlaskAlbumArtUrl from 'assets/potent_flask.png';

export const VGMACCV1Key =
  'video-game-music-assorted-covers-collection-volume-i';
export const VGMACCV2Key =
  'video-game-music-assorted-covers-collection-volume-ii';
export const AnamnesisKey = 'anamnesis';
export const CommissionsV1Key = 'commissions-vol-i';
export const PotentFlaskKey = 'potent-flask';

export enum STORE_KEYS {
  SPOTIFY = 'spotify',
  APPLE_MUSIC = 'appleMusic',
  AMAZON = 'amazon',
  YOUTUBE = 'youTube',
  TIDAL = 'tidal',
}

export type MusicStores = {
  [STORE_KEYS.SPOTIFY]: string;
  [STORE_KEYS.APPLE_MUSIC]: string;
  [STORE_KEYS.AMAZON]: string;
  [STORE_KEYS.YOUTUBE]: string;
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
    url: 'https://music.amazon.com/artists/B074F5PRG1/midnight-laboratory',
  },
  [STORE_KEYS.YOUTUBE]: {
    name: 'YouTube',
    image: YouTubeStoreImageUrl,
    url: 'https://www.youtube.com/@midnightlaboratorymusic', // https://music.youtube.com/channel/UCywTXq0cdEQBDGJnA01OOVQ
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
  VGMACCV2Key,
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
  STORE_KEYS.TIDAL,
];

export const albumMap: AlbumMap = {
  /**
   * Grand Slam (feat. Eggrollbuddy)
   *
   * SPOTIFY: https://open.spotify.com/album/6jZGXYfED5ERx9EoaFbd66
   * APPLE_MUSIC: https://music.apple.com/us/album/grand-slam-feat-eggrollbuddy-single/1763858821
   * AMAZON: https://music.amazon.com/albums/B0DDJLQX6T
   * YOUTUBE: https://music.youtube.com/playlist?list=OLAK5uy_mkMAi5R2FotZcdCRFRiwW7VN4zc3e3DcM
   * TIDAL: https://tidal.com/browse/album/381948801?u
   */
  [VGMACCV2Key]: {
    image: VGMACCV2AlbumArtUrl,
    title: 'Video Game Music Assorted Covers Collection Volume II',
    trackList: [
      {
        name: 'Lava Reef Zone',
        feat: '(From "Sonic & Knuckles") [feat. s0nderlust]',
      },
      {
        name: 'Battle Against a Weird Opponent',
        feat: '(From "Earthbound") [feat. Nonjo Heat Stroke]',
      },
      {
        name: 'Death by Glamour',
        feat: '(From "Undertale")',
      },
      { name: 'Snowman', feat: '(From "Earthbound") [feat. TehSaxophonist]' },
      { name: 'Contemplation in Snow', feat: '(From "Genshin Impact")' },
      {
        name: 'Layer Cake',
        feat: '(From "Persona 5")',
      },
      { name: 'Hydrocity Zone Act 2', feat: '(From "Sonic the Hedgehog 3")' },
      {
        name: 'Fight Against Culex',
        feat: '(From "Super Mario RPG")',
      },
      { name: "Kuja's Theme", feat: '(From "Final Fantasy IX")' },
      { name: 'Radical Dreamers', feat: '(From "Chrono Cross")' },
    ],
    stores: {
      [STORE_KEYS.SPOTIFY]:
        'https://open.spotify.com/album/4pRrvcSeXU8MR4LK0TbSOs',
      [STORE_KEYS.APPLE_MUSIC]:
        'https://music.apple.com/us/album/video-game-music-assorted-covers-collection-volume-ii/1798848735',
      [STORE_KEYS.AMAZON]: 'https://music.amazon.com/albums/B0DYL89C1G',
      [STORE_KEYS.YOUTUBE]:
        'https://music.youtube.com/playlist?list=OLAK5uy_kbhThTAVWWbAAhKFbfTDs8MJEiAbOTuTs',
      [STORE_KEYS.TIDAL]: 'https://tidal.com/browse/album/420544914',
    },
  },
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
      [STORE_KEYS.AMAZON]: 'https://music.amazon.com/albums/B0D16K81GM',
      [STORE_KEYS.YOUTUBE]:
        'https://music.youtube.com/playlist?list=OLAK5uy_kXgpVQXzzdpeU91wbJVNnGdoZVD9JVROA',
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
      [STORE_KEYS.AMAZON]: 'https://music.amazon.com/albums/B0CLZ3XVRT',
      [STORE_KEYS.YOUTUBE]:
        'https://music.youtube.com/playlist?list=OLAK5uy_lCriDV_dltRWTWFvYyf-iY02hFUbhXEqs',
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
      [STORE_KEYS.AMAZON]: 'https://music.amazon.com/albums/B09F1PXY92',
      [STORE_KEYS.YOUTUBE]:
        'https://music.youtube.com/playlist?list=OLAK5uy_mV40amWQl32SmUhHqq_Mr3wD64DDExLes',
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
      [STORE_KEYS.AMAZON]: 'https://music.amazon.com/albums/B074F9GMZC',
      [STORE_KEYS.YOUTUBE]:
        'https://music.youtube.com/playlist?list=OLAK5uy_nnnD6lP-IqK4zOkgAjHF1emSjwEf_snLk',
      [STORE_KEYS.TIDAL]: 'http://www.tidal.com/album/76914342',
    },
  },
};
