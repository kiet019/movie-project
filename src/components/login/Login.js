import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const insert = (usercode) => {
    const newTask = {
      usercode: usercode,
      role: 0
    };
    fetch('https://640fb835864814e5b63e38dc.mockapi.io/api/news/account', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
          return res.json();
      } else {
        
      }
      // handle error
    }).then(task => {
      // do something with the new task
    }).catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    if (user != null) {
      const url = new URL(
        `https://640fb835864814e5b63e38dc.mockapi.io/api/news/account`
      );
      url.searchParams.append("usercode", user.uid);
      fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((tasks) => {
          if (tasks.length > 0) {
            if(tasks[0].role ===1) {
              navigate("/dashboard")
            } else {
              navigate("/home");
            }
          } else if (tasks.length === 0){
            navigate("/home");
            insert(user.uid);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <div className="login-place">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}
