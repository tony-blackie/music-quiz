import { UISong } from "./types";

type Props = UISong;

const ArtistDetails = ({ artist, name }: Props) => {
  return (
    <div>
      <div>{`${artist} - ${name}`}</div>
    </div>
  );
};

export default ArtistDetails;
