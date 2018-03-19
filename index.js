import io from 'socket.io-client/dist/socket.io';

module.exports = exports = class Test {

	constructor() {
		this.socketIo = null;
	}

	connect(url) {
		this.socketIo = io(url);

		this.socketIo.on('connect_error', () => {
			console.log('Server unreachable');
		});
	}
}