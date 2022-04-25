const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const allUsers = [
  {
    id: 0,
    first_name: "Leta",
    email: "lgarner0@google.ru",
  },
  {
    id: 1,
    first_name: "Margi",
    email: "mdegue1@cyberchimps.com",
  },
  {
    id: 2,
    first_name: "Glennie",
    email: "gknappett2@etsy.com",
  },
  {
    id: 3,
    first_name: "Jennette",
    email: "jpringley3@dagondesign.com",
  },
  {
    id: 4,
    first_name: "Francisca",
    email: "ffilyashin4@flavors.me",
  },
  {
    id: 5,
    first_name: "Chryste",
    email: "cpickerin5@vinaora.com",
  },
  {
    id: 6,
    first_name: "Eba",
    email: "etalloe6@lycos.com",
  },
  {
    id: 7,
    first_name: "Ruprecht",
    email: "rletford7@amazon.co.uk",
  },
  {
    id: 8,
    first_name: "Stefa",
    email: "scobbled8@archive.org",
  },
  {
    id: 9,
    first_name: "Lenna",
    email: "lskidmore9@twitpic.com",
  },
  {
    id: 10,
    first_name: "Karena",
    email: "kapplina@hibu.com",
  },
  {
    id: 11,
    first_name: "Marley",
    email: "mdominib@studiopress.com",
  },
];

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.get("/allUsers", (req, res) => {
  res.send(allUsers);
});

app.post("/allUsers", (req, res) => {
  //   console.log("hitting the post", req.body);
  const newUser = req.body;
  newUser.id = allUsers.length;
  allUsers.push(newUser);
  console.log(newUser);
  // res.send(JSON.stringify(newUser))
  res.json(newUser);
});

app.get("/allUsers/:id", (req, res) => {
  const selectedId = req.params.id;
  if (selectedId) {
    const selectedUser = allUsers.filter((pd) => pd.id == selectedId);
    res.send(selectedUser);
  } else {
    res.send(allUsers);
  }
});

app.get("/searchNow", (req, res) => {
  const searchedKey = req.query.search;
  console.log(searchedKey);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
