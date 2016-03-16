Gun2 = React.createClass({
	render() {
		return(
			<div>
				<h3>Gun 2</h3>
				<form className="gun1">
					Elevation<input type="number" name="elevation" min="0" max="1600" />
					Bearing<input type="number" name="bearing" min="0" max="6399" />
				</form>
			</div>
		)
	}
});