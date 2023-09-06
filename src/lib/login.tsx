'use client';
import styles from "./login.module.css"
import { FormEvent } from "react";

export default function LoginForm() {

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: Object = {
      username: document.getElementById("username")!.value,
      password: document.getElementById("password")!.value
    }
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })

    // const data = await response.json()
    // console.log(data)
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={styles.loginInput}>
        <label>Username</label>
        <input id="username" type="text" required></input>
      </div>
      <div className={styles.loginInput}>
        <label>Password</label>
        <input id="password" type="password" required></input>
      </div>
      <button id={styles.submitBT} type="submit">Login</button>
  </form>
  );
}
