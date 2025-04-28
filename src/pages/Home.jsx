import { useEffect, useState } from "react";
import { fetchPopularVideos } from "../services/api";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularVideos()
      .then((res) => {
        setVideos(res.data.videos);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2 style={{ margin: "20px" }}>Popular Videos</h2>
      <VideoList videos={videos} searchTerm="popular" />
    </div>
  );
}
