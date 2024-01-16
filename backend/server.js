const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();



const PORT = 3001; // Use a single port number
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "policecatalog",
  namedPlaceholders: true
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.get("/header", (req, res) => {
   const sql = "SELECT * FROM header";
     // Use the pool to execute the query
     db.query(sql, (err, data) => {
      if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: err.message });
      }
      return res.json(data);
  });
});

app.get("/catalog", (req, res) => {
    const sql = "SELECT * FROM catalog";
    // Use the pool to execute the query
    db.query(sql, (err, data) => {
      if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: err.message });
      }
      return res.json(data);
  });
});

app.get("/buttons", (req, res) => {
    const sql = "SELECT * FROM buttons";
    // Use the pool to execute the query
    db.query(sql, (err, data) => {
      if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: err.message });
      }
      return res.json(data);
  });
});
app.put("/updateBtn/:id", (req, res) => {
   const buttonId = req.params.id;
   const {button, link} = req.body;

   const sql = "UPDATE buttons SET button =?, link =? WHERE id =?";
   // Use the pool to execute the query
   db.query(sql, [button, link, buttonId], (err, data) => {
    if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: err.message });
    }
    return res.json(data);
  })
});


app.post("/addButton", (req, res) => {
  const { button, link } = req.body;

  const sql = "INSERT INTO buttons (button, link) VALUES (?, ?)";

  db.query(sql, [button, link], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: "Duplicate entry. Please provide a unique title." });
      }
      return res.status(500).json({ error: err.message });
    }
    console.log("Record inserted successfully");
    return res.json({ success: true });
  });
});


app.delete("/deleteBtn/:id", (req, res) => {
 const buttonId = req.params.id;
 const sql = "DELETE FROM buttons WHERE id =?";
 db.query(sql, buttonId,(err, result) => {
  if (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: err.message });
}

if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Camera not found" });
}

console.log("Record deleted successfully");
return res.json({ success: true });
 })
});
// PUT request route
app.put("/update/:id", (req, res) => {
 const catalogId = req.params.id;
 const { image, title, link } = req.body;

 const sql = "UPDATE catalog SET image =?, title =?, link =? WHERE id =?";

 db.query(sql, [image, title, link, catalogId], (err, result) => {
  if (err) {
    console.error("Database error:", err);
    return res.status(500).json({ error: err.message });
  }
  if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Camera not found" });
}

console.log("Record updated successfully");
return res.json({ success: true });
  })
});

app.post("/addCatalog", (req, res) => {
   const { image, title, link } = req.body;
   const sql = "INSERT INTO catalog (image, title, link) VALUES (?,?,?)";

   db.query(sql, [image, title, link], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: "Duplicate entry. Please provide a unique title." });
      }
      return res.status(500).json({ error: err.message });
    }
    console.log("Record inserted successfully");
    return res.json({ success: true });
  });
});

app.delete("/delete/:id", (req, res) => {
  const catalogId = req.params.id;
  const sql = "DELETE FROM catalog WHERE id =?";
  db.query(sql, catalogId,(err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Camera not found" });
  }

  console.log("Record deleted successfully");
  return res.json({ success: true });
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
