import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import jwt from "jsonwebtoken"

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server")
})

app.post("/auth/login", (req: Request, res: Response) => {
  const { email } = req.body
  try {
    const token = jwt.sign(
      {
        email: email,
        name: "Jon",
        locale: "es",
      },
      "secret"
    )
    res.json({
      jwtToken: token,
    })
  } catch (error) {
    res.status(404)
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
