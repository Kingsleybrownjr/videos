import Spinner from './Spinner';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <Spinner />;
	}

	const { title, description } = video.snippet;
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="Video player" src={videoSrc} frameBorder="0"></iframe>
			</div>
			<div className="ui segment bg-color">
				<h4 className="ui header text-color">{title}</h4>
				<p className="text-color">{description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
