import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./context.css";

export default function ContextThird() {
  const { users, updateUser } = useContext(UserContext);
  console.log(6, users);

  function handleDelete(elId) {
    let userDelete = JSON.parse(JSON.stringify(users));
    userDelete = userDelete.filter((el) => el.id != elId);
    updateUser(userDelete);
  }

  return (
    <section>
      <div className="row">
        {users.map((el, index) => {
          return (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <div className="cover item-a">
                  <h1>{el.name}</h1>
                  <span className="price">Age: {el.age}</span>
                  <div className="card-back">
                    <button
                      onClick={() => {
                        handleDelete(el.id);
                      }}
                    >
                      Delete card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
