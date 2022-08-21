import { useEffect, useState } from "react";

const useMember = (user) => {
  const [member, setMember] = useState(false);
  const [memberLoading, setMemberLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/member/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMember(data.member);
          setMemberLoading(false);
        });
    }
  }, [user]);
  return [member, memberLoading];
};

export default useMember;
