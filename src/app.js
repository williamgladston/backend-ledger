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
  res.send(`
    <html>
      <head>
        <title>Ledger Service API</title>

        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            padding: 40px;
          }

          h1 {
            color: #38bdf8;
            margin-bottom: 10px;
          }

          .section {
            margin-top: 30px;
          }

          .section h2 {
            color: #facc15;
            margin-bottom: 10px;
          }

          .api-link {
            display: block;
            margin: 10px 0;
            padding: 12px 16px;
            background: #1e293b;
            border-radius: 8px;
            text-decoration: none;
            color: #e2e8f0;
            transition: 0.2s;
            border: 1px solid #334155;
          }

          .api-link:hover {
            background: #334155;
            transform: translateX(5px);
            color: #38bdf8;
          }

          .method {
            font-weight: bold;
            margin-right: 10px;
            color: #22c55e;
          }

          .post {
            color: #f97316;
          }
        </style>
      </head>

      <body>

        <h1>🚀 Ledger Service API</h1>
        <p>Backend service is up and running successfully.</p>

        <div class="section">
          <h2>🔐 Authentication APIs</h2>

          <a class="api-link" href="/api/auth/register">
            <span class="method post">POST</span>
            /api/auth/register
          </a>

          <a class="api-link" href="/api/auth/login">
            <span class="method post">POST</span>
            /api/auth/login
          </a>

          <a class="api-link" href="/api/auth/logout">
            <span class="method post">POST</span>
            /api/auth/logout
          </a>
        </div>

        <div class="section">
          <h2>🏦 Account APIs</h2>

          <a class="api-link" href="/api/accounts">
            <span class="method">GET</span>
            /api/accounts
          </a>

          <a class="api-link" href="/api/accounts/balance/1">
            <span class="method">GET</span>
            /api/accounts/balance/:accountId
          </a>
        </div>

        <div class="section">
          <h2>💸 Transaction APIs</h2>

          <a class="api-link" href="/api/transactions">
            <span class="method post">POST</span>
            /api/transactions
          </a>

          <a class="api-link" href="/api/transactions/system/initial-funds">
            <span class="method post">POST</span>
            /api/transactions/system/initial-funds
          </a>
        </div>

      </body>
    </html>
  `);
});

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)

module.exports = app