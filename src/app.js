const express = require("express")
const cookieParser = require("cookie-parser")



const app = express()


app.use(express.json())
app.use(cookieParser())

/**
 * - Routes required
 */
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRoutes = require("./routes/transaction.routes")

/**
 * - Use Routes
 */

app.get("/", (req, res) => {
    res.send("Ledger Service is up and running",
        "\n Authentication APIs (/api/auth)",
    " \nPOST /api/auth/register",
    " \nPOST /api/auth/login",
    " \nPOST /api/auth/logout",
    " \nAccount APIs (/api/accounts)",
    "\n GET /api/accounts/balance/:accountId",
    "\n GET /api/accounts/",
    "\n Transaction APIs (/api/transactions)",
    "\n POST /api/transactions/",
    "\n POST /api/transactions/system/initial-funds"
)
})

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)

module.exports = app