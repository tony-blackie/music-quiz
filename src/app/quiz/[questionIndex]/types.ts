export type Song = {
  id: string;
  artist: string;
  name: string;
  audioUrl: string;
  songImageUrl: string;
  artistImageUrl: string;
  about: string;
};

export type UISong = Song & {
  guessed: boolean;
};
