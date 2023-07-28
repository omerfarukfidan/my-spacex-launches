import Link from "next/link";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await query.json();
      console.log("response from api", response);
      setUserInfo(response);
    };
    getData();
  }, []);

  return (
    <>
      <Layout>
        <div>
          <h2> This is User Page! </h2>
        </div>

        <div>
          {userInfo &&
            userInfo.length &&
            userInfo.map((user, index) => {
              console.log(index);
              return (
                <>
                  <h4 key={user.id}>{user.name}</h4>
                </>
              );
            })}
        </div>
      </Layout>
    </>
  );
};

export default User;
