import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const signupData = {
      userid,
      username,
      userPwd,
      email,
      nickname,
      phoneNum,
      gender,
    };

    axios
      .post("/api/signup/register", signupData)
      .then((response) => {
        console.log(response.data);
        alert("회원가입이 완료되었습니다.");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("회원가입에 실패했습니다.");
      });
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserId</label>
          <input
            type="text"
            value={userid}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={userPwd}
            onChange={(event) => setUserPwd(event.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNum}
            onChange={(event) => setPhoneNum(event.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={(event) => setGender(event.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
