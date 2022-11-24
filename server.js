const app = require("./app")

const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(PORT);
    console.log(`App is running at ${PORT} `);
})
