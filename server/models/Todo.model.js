const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const todoSchema = new Schema({
    // user: { type: ObjectId, ref: "User" },
    title: String,
    description: String,
    completed: Boolean,
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;
