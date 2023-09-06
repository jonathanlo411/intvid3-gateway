'use client';
import { redirect } from 'next/navigation';
import Cookies from 'js-cookie'


export async function getServerSideProps(cookie) {
    const bcrypt = require('bcrypt')
    const authCookie = Cookies.get()
    console.log(`sercer: ${cookie}`)
    console.log(`server: ${process.env.AUTH_COOKIE}`)
    return {
        props: { data: {} }
    }
}

export default function Dashboard() {
    // let ssData = getServerSideProps(Cookies.get('auth'))
    // console.log(props)
    const authCookie = Cookies.get()
    console.log(authCookie)
    console.log(process.env.AUTH_COOKIE)
    return (
        <main>
            <h1>Dashboard</h1>
            <p>Work in progress...</p>
            {/* <div>{props.authData}</div>
            <div>{props.sample}</div> */}
            <h1>new</h1>
        </main>
    )
}