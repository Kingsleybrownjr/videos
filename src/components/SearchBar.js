import { Component } from 'react';

class SearchBar extends Component {
	state = { term: '' };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};
	onFormSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="">Video Search:</label>
					</div>
					<input
						type="text"
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
