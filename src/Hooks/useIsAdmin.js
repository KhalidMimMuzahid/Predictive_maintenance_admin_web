import { useEffect, useState } from "react";

const useIsAdmin = (uid) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    if (uid) {
      fetch(
        `${process.env.REACT_APP_BASE_URL}/user/showa-user/sign-in?uid=${uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.token) {
            console.log(data);
            setIsAdmin(true);
            setAdminData(data);
          }
        });
    }
  }, [uid]);

  return [isAdmin, setIsAdmin, adminData, setAdminData];
};

export default useIsAdmin;
