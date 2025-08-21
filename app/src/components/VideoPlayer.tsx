import ReactPlayer from 'react-player';

type VideoPlayerProps ={
    url: string
}
const VideoPlayer : React.FC<VideoPlayerProps> = ({url})=> {
  return (
    <ReactPlayer
      url={url}
      controls={true}
      width="640px"
      height="360px"

    />
  );
}

export default VideoPlayer;