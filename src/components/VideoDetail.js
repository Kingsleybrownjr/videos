const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	console.log(video);
	const { title, description } = video.snippet;
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="Video player" src={videoSrc} frameBorder="0"></iframe>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
