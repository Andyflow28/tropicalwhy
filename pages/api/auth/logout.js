import { verify } from 'jsonwebtoken'
import { serialize } from "cookie"

export default function logoutHandler(req, res) {
    const { mytokenName } = req.cookies

    try {
        verify(mytokenName, process.env.DB_SECRET_ID)
        const serialized = serialize('mytokenName', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json("logout succesfully")
    } catch (error) {
        console.log(error);
    }
}