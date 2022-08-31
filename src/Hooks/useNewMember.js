import { useEffect, useState } from "react";

const useNewMember = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const name = user?.user?.displayName;
    const email = user?.user?.email;
    const currentUser = { name: name, email: email, role: "member" };
    if (email) {
      fetch(`https://vast-peak-81199.herokuapp.com/user/member/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useNewMember;
