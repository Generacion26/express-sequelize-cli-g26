const app = require("./app")

const PORT = process.env.PORT || 8080

const main = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Your app listening on port ${PORT} - http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error);

  }
}

main()