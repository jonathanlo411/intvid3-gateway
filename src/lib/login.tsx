'use client';
import styles from "./login.module.css"
import { FormEvent } from "react";
import Cookies from 'js-cookie';
import { useState } from "react";

export default function LoginForm() {
  const [showError, setShowError] = useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if creds are valid
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
    const data = await response.json()

    // If creds valid set auth cookie else send error
    console.log(data)
    if (data.cookie) {
      Cookies.set(
        "auth",
        data.cookie.auth,
        { expires: 1 }
      )
      location.href = "/dashboard"
    } else {
      setShowError(true)
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {showError && <div className={styles.error}>Error: Invalid Credentials</div>}
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
