Gun1 = React.createClass({
	getInitialState: function() {
		return {
			elevation: '',
			bearing: ''
		};
	},
	updateElevation(event) {
		this.setState({elevation: event.target.value});
	},
	updateBearing(event) {
		this.setState({bearing: event.target.value});
	},
	render() {
		return(
			<div>
				<h3>Gun 1</h3>
				<form className="gun1">
					Ordnance:
					Projectile
					HE<input
						type="radio"
						name="ammo"
						value="HE" />
					SMK<input
						type="radio"
						name="ammo"
						value="Smoke"	/>
					Fuze
						PD<input
							type="radio"
							name="fuze"
							value="PD" />
						MT<input
							type="radio"
							name="fuze"
							value="MT" />
						PROX<input
							type="radio"
							name="fuze"
							value="PROX" />

					Elevation<input
						type="range"
						name="elevation"
						min="0"
						max="1600"
						onChange={this.updateElevation} />
					<h3>Gun1 elevation: {this.state.elevation}</h3>
					Bearing<input
						type="range"
						name="bearing"
						min="0"
						max="6399"
						onChange={this.updateBearing} />
					<h3>Gun1 bearing: {this.state.bearing}</h3>
				</form>
			</div>
		)
	}
});