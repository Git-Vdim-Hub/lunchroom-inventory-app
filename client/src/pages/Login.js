import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { USER_LOGIN } from "../utils/mutations";

export default function () {
	const [userInfo, setUserInfo] = useState({
		username: "",
		password: "",
	});
	const [login, { error, data }] = useMutation(USER_LOGIN);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(userInfo);

		try {
			const { data } = await login({
				variables: { ...userInfo },
			});

			Auth.login(data.login.token);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div>
			<h3>Login:</h3>
			<form onSubmit={handleFormSubmit}>
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
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
