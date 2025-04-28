import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchVideos } from "../services/api";
import VideoList from "../components/VideoList";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Search() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos([]);
    setLoading(true);

    searchVideos(searchTerm)
      .then((res) => {
        setVideos(res.data.videos);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [searchTerm]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2 style={{ margin: "20px" }}>Showing results for "{searchTerm}"</h2>
      <VideoList videos={videos} searchTerm={searchTerm} />
    </div>
  );
}
