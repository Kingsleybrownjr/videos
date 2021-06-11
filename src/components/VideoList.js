import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderVideoList = videos.map(video => (
		<VideoItem
			key={video.id.videoId}
			video={video}
			onVideoSelect={onVideoSelect}
		/>
	));

	return <div className="ui relaxed divided list">{renderVideoList}</div>;
};

export default VideoList;
