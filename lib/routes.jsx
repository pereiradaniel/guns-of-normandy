FlowRouter.route('/', {
	name: 'home',
	action() {
		ReactLayout.render(App, {
			content: <Main />
		});
	}
});