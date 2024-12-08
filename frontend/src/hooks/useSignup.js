import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => { 
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async({ name, username, password, gender }) => {
		const success = handleInputErrors({ name, username, password, gender });
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, username, password, gender }),
			});
			console.log("work done");

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ name, username, password, gender }) {
	if (!name || !username || !password  || !gender) {
		toast.error("Please fill in all fields");
		throw new Error("Please fill all the fields");
	}

	// if (password.length < 6) {
	// 	toast.error("Password must be at least 6 characters");
	// 	return false;
	// }

	return true;
}