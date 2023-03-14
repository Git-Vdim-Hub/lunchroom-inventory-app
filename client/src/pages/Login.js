import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { USER_LOGIN } from "../utils/mutations";

export default function Login() {
	const [userInfo, setUserInfo] = useState({
		username: "",
		password: "",
	});
	const [loginMutation, { error, data }] = useMutation(USER_LOGIN);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			// returns token and username if password validation passes
			const { data } = await loginMutation({
				variables: { ...userInfo },
			});
			Auth.login(data.login.token);
			window.location.assign("/Home");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<h3>Login:</h3>
			<form>
				<input
					name="username"
					onChange={handleInputChange}
					placeholder="username"
					value={userInfo.username}
					autoComplete="username"
				></input>
				<input
					name="password"
					onChange={handleInputChange}
					placeholder="password"
					value={userInfo.password}
					type="password"
					autoComplete="current-password"
				></input>
				<button onClick={handleFormSubmit}>Login</button>
			</form>
		</div>
	);
}
