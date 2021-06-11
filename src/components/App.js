import { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async term => {
		const res = await youtube.get('/search', {
			params: {
				q: term,
			},
		});

		this.setState({ videos: res.data.items });
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={this.onVideoSelect}
				/>
			</div>
		);
	}
}

export default App;
