const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();

app.use(express.static("public"));
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data
// Thiết lập EJS làm view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const connectDB = require("./config/db");
const appRouter = require("./routes/index");

// Connect to MongoDB
connectDB();
appRouter(app);
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`User ${socket.id} da ket noi`);

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} da ngat ket noi`);
  });

  // 1.2 Nhan data tu Client
  socket.on("Client-send-data", (dataComment) => {
    console.log(dataComment);
    // 2.1 Log comment tu Client cho Client #
    io.sockets.emit("Server-send-data", dataComment);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.render("trangchu");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
