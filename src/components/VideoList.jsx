import VideoCard from "./VideoCard";

export default function VideoList({ videos, searchTerm }) {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} searchTerm={searchTerm} />
      ))}
    </div>
  );
}
