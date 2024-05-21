import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/TicketDB")
  .then(() => {
    console.log("Mongo Connected");
  })

  .catch((err) => {
    console.log("Mongo Connection Error");
    console.log(err);
  });

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
