import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Pages</h1>
      <p>Displaying Deatils for user ID :{userId}</p>
    </div>
  );
}

export default Profile;
