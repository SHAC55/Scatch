const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const path = require("path")

const productRouter = require("./routes/productRouter")
const ownerRouter = require("./routes/ownerRouter")
const userRouter = require("./routes/userRouter")

const db = require("./config/mongoose-connection")

require("dotenv").config()


const{ generateToken} = require("../E-COMMERCE SCATCH/utils/ganerateToken")

app.use(express.json())
app.use(express.urlencoded ({ extended : true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // ROUTERS SETUP
  app.use("/owner",ownerRouter)
  app.use("/users",userRouter)
  app.use("/products",productRouter)

app.listen(3000)