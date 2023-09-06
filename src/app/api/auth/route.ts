import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt")

// Testing awk
export async function GET(request: NextApiRequest) {
  const response: Object = {
    message: "Awk recieved, connection OK. Note: If attempting to login, use POST"
  }
  return NextResponse.json( response, { status: 200 });
}


// Handle login form
export async function POST (
    request: NextApiRequest,
    // response: NextApiResponse
) {
    const data = await request.json()
    
    // Compare hashes to user account
    const envUserHash: String = await bcrypt.hashSync(process.env.AUTH_USER, 10)
    const envPassHash: String = await bcrypt.hashSync(process.env.AUTH_PASS, 10)
    const userMatch: boolean = await bcrypt.compareSync(data.username, envUserHash)
    const passMatch: boolean = await bcrypt.compareSync(data.password, envPassHash)
    
    
    if (userMatch && passMatch) {
        const cookieHash: string = await bcrypt.hashSync(process.env.AUTH_COOKIE, 10)
        const response = NextResponse.next()
        response.cookies.set({
            name: 'auth',
            value: cookieHash,
            httpOnly: true,
        })
        return response

        // response.setHeader("set-cookie", `auth=${cookieHash}; path=/; samesite=lax; httponly;`)
        // response.redirect("/dasboard")
    } else {
        // response.status(401).json({ message: "Bad auth. Try again." })
        console.log("bad")
    }

}