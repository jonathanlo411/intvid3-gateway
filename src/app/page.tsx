import styles from "./page.module.css"
import { FormEvent } from "react"
import  LoginForm from "./../lib/login"

export default function Home() {

  return (
    <main>
      <section id={styles.main}>
        <div id={styles.login}>
          <h1>IV Portal</h1>
          <LoginForm />
        </div>
      </section>
    </main>
  )
}
