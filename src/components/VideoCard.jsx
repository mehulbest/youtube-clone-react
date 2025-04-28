import { Link } from "react-router-dom";

export default function VideoCard({ video, searchTerm }) {
  return (
    <div className="video-card">
      <Link
        to={`/watch/${video.id}`}
        state={{
          videoUrl: video.video_files[0].link,
          searchTerm: searchTerm || "popular",
        }}
      >
        <video src={video.video_files[0].link} controls muted />
        <h4>{video.user.name}</h4>
      </Link>
    </div>
  );
}
