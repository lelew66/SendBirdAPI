import "./App.css";
// import SendBird from "sendbird";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    createSendBirdUsers();
  }, []);

  const createSendBirdUsers = async () => {
    
      const sendbird = axios.post(
        "https://api-{8E9532DB-9715-4737-BB2B-311EA8470AEB}.sendbird.com/v3/users",
        {
          user_id: "3",
          nickname: "TestUser",
          profile_url: "",
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf8",
            "Api-Token": "{8472e3f2b05282b91e59581c70fb85cc57f3a515}",
          },
        }
      ).then(function(sendbird)
      {console.log(sendbird.data);})

      
   .catch (function(error) {
      console.error("Error creating SendBird users:", error);
    })
  };

  return <div className="App">hello</div>;
}

export default App;
