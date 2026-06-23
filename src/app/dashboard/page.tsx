"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  // const { data: session } = useSession();
  const [formData, setFormData] = useState({ name: "", description: "", contact: "", work: "", experience: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/portfolio", {
      method: "POST",
      body: JSON.stringify({ ...formData}),
    });
    const data = await res.json();
    alert("Portfolio Created!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
      <input placeholder="Contact" onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
      <button type="submit">Generate Portfolio</button>
    </form>
  );
}
