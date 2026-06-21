"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("/api/login", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      // ส่ง role ไปหน้า home
      router.push(`/home?role=${data.role}&name=${data.name}`);
    } else {
      alert("Login failed");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" />
        <br /><br />

        <input name="password" type="password" placeholder="Password" />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}