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
		<div className="grid justify-center items-center h-screen">
			<div className="border-2 border-neutral p-5 rounded-lg">
				<h3 className="text-xl text-center text-primary-focus">Login</h3>
				<form className="flex flex-col md:w-96 gap-8 m-5">
					<input
						name="username"
						className="input input-bordered border-2 border-primary"
						onChange={handleInputChange}
						placeholder="username"
						value={userInfo.username}
						autoComplete="username"
					></input>
					<input
						name="password"
						className="input input-bordered border-2 border-primary"
						onChange={handleInputChange}
						placeholder="password"
						value={userInfo.password}
						type="password"
						autoComplete="current-password"
					></input>
					<button 
						onClick={handleFormSubmit}
						className="btn"
						>Login</button>
				</form>
			</div>
		</div>
	);
}
