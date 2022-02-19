import { getUsers } from "api/services/UserService";
import Emptylist from "components/Emptylist/Emptylist";
import Layout from "components/Layout/Layout";
import PageLoader from "components/Loader/PageLoader";
import Title from "components/Title/Title";
import { useState, useEffect } from "react";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        console.log(err);
      });
  }, []);

  return (
    <>
      {isLoading > 0 && <PageLoader />}
      <Layout>
        <header className="flex justify-between items-center">
          <div>
            <Title>
              <h1>Agzalar</h1>
            </Title>
            <small>Jemi: {users.length}</small>
          </div>
        </header>

        <main className="flex flex-col my-5">
          {users.length === 0 && <Emptylist message="Sanaw boş" />}

          {users.length > 0 &&
            users.map((user, index) => {
              return (
                <aside
                  key={index}
                  className="flex items-center bg-slate-900 mb-3 rounded-lg px-5 py-3"
                >
                  <p>{user.email}</p>
                </aside>
              );
            })}
        </main>
      </Layout>
    </>
  );
};

export default Users;
