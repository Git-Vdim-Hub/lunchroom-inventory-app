import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<UserContext.Provider value={{ loggedIn: loggedIn }}>
			{children}
		</UserContext.Provider>
	);
};
