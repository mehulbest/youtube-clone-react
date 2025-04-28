import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { searchVideos } from "../services/api";
import { Link } from "react-router-dom";

export default function Watch() {
    const location = useLocation();
    const navigate = useNavigate();
    const { videoUrl, searchTerm } = location.state || {};
    const [suggestedVideos, setSuggestedVideos] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            searchVideos(searchTerm)
                .then((res) => setSuggestedVideos(res.data.videos))
                .catch((err) => console.error(err));
        }
    }, [searchTerm]);

    const handleVideoClick = (video) => {
        navigate(`/watch/${video.id}`, {
            state: { videoUrl: video.video_files[0].link, searchTerm: searchTerm }
        });
    };

    if (!videoUrl) {
        return <h2>No Video Found</h2>;
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px", padding: "20px" }}>
            {/* Left Side */}
            <div style={{ flex: 2 }}>
                <ReactPlayer url={videoUrl} controls width="100%" height="600px" />
            </div>

            {/* Right Side (Suggestions) */}
            <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Up Next</h3>
                {suggestedVideos.slice(0, 8).map((video) => (
                    <div
                        key={video.id}
                        className="suggested-video"
                        onClick={() => handleVideoClick(video)}
                    >
                        <video src={video.video_files[0].link} muted style={{ width: "100%", height: "100px", borderRadius: "8px", objectFit: "cover" }} />
                        <h5 style={{ margin: "5px 0", fontSize: "14px", fontWeight: "500" }}>{video.user.name}</h5>
                    </div>
                ))}
            </div>
        </div>

    );
}
