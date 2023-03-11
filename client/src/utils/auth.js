import decode from "jwt-decode";

class Authservice {
	// get user data from JWT by decoding it
	getUser() {
		return decode(this.getToken());
	}

	// return true/false if token exists
	loggedIn() {
		const token = this.getToken();
		return token ? true : false;
	}

	// retrieves user token from local storage
	getToken() {
		return localStorage.getItem("id_token");
	}

	// saves user token to localStorage and reloads app with loggedIn status
	login(idToken) {
		localStorage.setItem("id_token", idToken);
		window.location.assign("/");
	}

	// clear user token and user data form localStorage and reset application
	logout() {
		localStorage.removeItem("id_token");
		window.location.reload();
	}
}

export default new Authservice();
