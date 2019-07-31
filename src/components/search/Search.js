import React, {Component} from "react"
import TextField from "material-ui/TextField"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import axios from "axios"

class Search extends Component {
	state = {
		searchText: "",
		amount: 15,
		apiURL: "https://unsplash.com/api",
		apiKey: "85a0b9614229dfacfca600ad289483b1debb8e56c208051ac93b6400ddc866da",
		images: []
	}
	onTextChange = e => {
		this.setState({[e.target.name]: e.target.value}, () => {
			axios
				.get(
					`${this.state.apiURL}/?key=${this.state.apiKey}&q=${
						this.state.searchText
					}&image_type=photo&per_page=${this.state.amount}`
				)
				.then(res => this.setState({images: res.data.urls}))
				.catch(err => console.log(err))
		})
	}
	render() {
		console.log(this.state.images)
		return (
			<div>
				<TextField
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText=" Search for Images"
					fullWidth={true}
				/>
				<br />
				<SelectField
					name="amount"
					floatingLabelText="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				>
					<MenuItem value={5} primaryText="5" />
					<MenuItem value={10} primaryText="10" />
					<MenuItem value={15} primaryText="15" />
					<MenuItem value={20} primaryText="20" />
					<MenuItem value={25} primaryText="25" />
				</SelectField>
				<br />
			</div>
		)
	}
}
export default Search
