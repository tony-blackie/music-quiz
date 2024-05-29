import { UISong } from "./types";

type Props = UISong;

const ArtistDetails = ({
  artist,
  name,
  artistImageUrl,
  audioUrl,
  about,
}: Props) => {
  return (
    <div>
      <div className="pb-8 text-xl font-bold text-mango-50">{`${artist} - ${name}`}</div>
      <div className="flex items-center justify-center w-full overflow-hidden max-h-96">
        <img src={artistImageUrl} className="w-full h-auto" />
      </div>
      <div className="flex items-center h-20 px-4 bg-mango-400">
        <audio src={audioUrl} controls className="w-full" />
      </div>
      <p className="py-8 text-mango-50">{about}</p>
    </div>
  );
};

export default ArtistDetails;
