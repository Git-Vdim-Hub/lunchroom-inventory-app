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
					{data ? (
					<p>
					  Success! You may now head{' '}
					  <Link to="/">back to the homepage.</Link>
					</p>
					) : (
					<form className="flex flex-col md:w-96 gap-8 m-5" onSubmit={handleFormSubmit}>
					<input
						name="username"
						className="input input-bordered border-2 border-primary"
						onChange={handleInputChange}
						placeholder="username"
						value={userInfo.username}
						autoComplete="username"
					/>
					<input
						name="password"
						className="input input-bordered border-2 border-primary"
						onChange={handleInputChange}
						placeholder="password"
						value={userInfo.password}
						type="password"
						autoComplete="current-password"
					/>
					<button type="submit" className="btn">
						Login
					</button>
				</form>
				)}

				{error && (
              <div className="alert alert-error shadow-lg">
				
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span>{error.message}</span>
						</div>
              </div>
            )}
			</div>
		</div>
	);
}
