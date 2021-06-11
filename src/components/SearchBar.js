import { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};
	onFormSubmit = e => {
		e.preventDefault();

		this.props.onTermSubmit(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<div className="ui segment bg-color">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label className='text-color'>Video Search:</label>
					</div>
					<input
						type="text"
						className='text-color bg-color'
						value={this.state.term}
						onChange={this.onInputChange}
						placeholder="Enter Search"
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
