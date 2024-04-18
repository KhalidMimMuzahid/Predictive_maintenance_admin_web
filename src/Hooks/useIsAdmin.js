import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useIsAdmin = (uid) => {
  const { user } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    if (uid) {
      fetch(`https://api.showaapp.com/admin/settings/find-admin-with-id/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.uniqueNumberId) {
            setIsAdmin(true);
            setAdminData(data);
          }
        });
    }
  }, [uid]);

  return [isAdmin, setIsAdmin, adminData, setAdminData];
};

export default useIsAdmin;
