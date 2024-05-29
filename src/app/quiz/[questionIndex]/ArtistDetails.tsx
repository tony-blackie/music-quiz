import { UISong } from "./types";

type Props = UISong;

const ArtistDetails = ({ artist, name, artistImageUrl, audioUrl }: Props) => {
  return (
    <div>
      <div>{`${artist} - ${name}`}</div>
      <div className="flex items-center justify-center w-full overflow-hidden max-h-96">
        <img src={artistImageUrl} className="w-full h-auto" />
      </div>
      <div>
        <audio src={audioUrl} controls />
      </div>
    </div>
  );
};

export default ArtistDetails;
