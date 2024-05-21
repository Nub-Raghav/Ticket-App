"use client";

import { useState } from "react";
import React, { useRouter } from "next/navigation";

const TicketForm = ({ edit_mode, ticket }) => {
  const router = useRouter();
  const ticketData = {
    title: "",
    description: "",
    category: "hardware problem",
    priority: 1,
    progress: 0,
    status: "not started",
  };

  if (edit_mode) {
    ticketData["title"] = ticket.title;
    ticketData["description"] = ticket.description;
    ticketData["priority"] = ticket.priority;
    ticketData["progress"] = ticket.progress;
    ticketData["status"] = ticket.status;
    ticketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(ticketData);

  const handleChange = (e) => {
    const changedState = e.target.name;
    const val = e.target.value;
    setFormData((prevData) => {
      return {
        ...prevData,
        [changedState]: val,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (edit_mode) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
    } else {
      const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex justify-center flex-col"
        onSubmit={handleSubmit}
        method="post"
      >
        <h3>{edit_mode ? "Update your ticket" : "Create your ticket"}</h3>
        <label htmlFor=""> Title </label>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="hardware problem"> Hardware Problem</option>
          <option value="software problem"> Software Problem</option>
          <option value="project"> Project </option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
