const express = require("express");
const path = require("path");

// for handling form data
const multer = require("multer");
const upload = multer();

const fs = require("fs");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "frontend", "views"));

app.use(express.static("static"));

app.use((req, res, next) => {
  let UserLog = `request on ${req.url} at ${new Date().toLocaleString()}\n`;
  const write = fs.promises.appendFile(__dirname + "/logs.txt", UserLog, {
    encoding: "utf-8",
  });
  write
    .then(() => {
      console.log("Successfully log into file");
    })
    .catch(() => {
      console.log("Something went wrong");
    });
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/users/create/", (req, res) => {
  res.render("createUser");
});

app.post("/userResponse/", upload.none(), (req, res) => {
  // const formData = JSON.parse(JSON.stringify(req.body));
  // let name = formData.name
  // let description = formData.description
  const { name, description } = req.body;
  const data = `Name : ${name}\nDescription : ${description}\n\n\n`;
  async function AppendUserData() {
    return await fs.promises.appendFile(__dirname + "/userData.txt", data, {
      encoding: "utf-8",
    });
  }
  AppendUserData().then(() => {
    console.log("User Data has been added...");
  });

  res.send(`Form submitted successfully...`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
