const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();

const PORT = 8000;
app.use(express.urlencoded({ extende: false }));

app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`)}
      </ul>`;

  return res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === Number(id));
    return res.json(user);
  })
  .patch((req, res) => {
    const body = req.body;
    index = users.findIndex((user) => user.id === Number(req.params.id));
    console.log(index);
    users[index] = { ...req.params.id, ...body };
    fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Success", id: req.params.id });
    });
  })
  .delete((req, res) => {
    index = users.findIndex((user) => user.id === Number(req.params.id));
    console.log(index);
    users.splice(index, 1);
    fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Success", id: req.params.id });
    });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", id: users.length + 1 });
  });
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
