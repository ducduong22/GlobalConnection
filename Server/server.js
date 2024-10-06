const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const User = require("./model/User");
const Message = require("./model/Message");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", async (data) => {
    const { senderId, receiverId, message } = data;
    const newMessage = new Message({ senderId, receiverId, content });
    await newMessage.save();

    io.emit("receiveMessage", newMessage);
  });

  // socket.on("disconnect", () => {
  //   console.log("User disconnected");
  // });
});

// File: server.js or app.js
app.post("/messages", async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  if (!senderId || !receiverId || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newMessage = new Message({ senderId, receiverId, content });
    await newMessage.save();
    io.emit("receiveMessage", newMessage);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/messages", async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  if (!senderId || !receiverId || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newMessage = new Message({ senderId, receiverId, content });
    await newMessage.save();
    io.emit("receiveMessage", newMessage);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route lấy tin nhắn giữa hai người dùng
app.get("/messages", async (req, res) => {
  const { senderId, receiverId } = req.query;

  // Validate that both senderId and receiverId are provided
  if (!senderId || !receiverId) {
    return res.status(400).json({ error: "Missing senderId or receiverId" });
  }

  try {
    // Find messages where sender and receiver match the given IDs
    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId }, // Match both directions
      ],
    }).sort({ createdAt: 1 }); // Optionally sort by creation time (ascending)

    // Return the messages in the response
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Tạo token đăng nhập (hoặc trả về thông tin người dùng)
    res.json({ token: "user-token", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password field
    console.log("Users fetched from DB:", users); // Log users to console
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
