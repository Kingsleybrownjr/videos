import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	const { title, description, thumbnails } = video.snippet;
	return (
		<div className="video-item item" onClick={() => onVideoSelect(video)}>
			<img className="ui image" src={thumbnails.medium.url} alt={description} />
			<div className="content">
				<p className="header text-color">{title}</p>
			</div>
		</div>
	);
};

export default VideoItem;
