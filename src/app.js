const express = require("express");
require("./db/conn");
const merchantRouter = require("./routers/merchants");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(merchantRouter);
app.use(userRouter);

app.listen(port, () => console.log(`connection is setup at ${port}`));