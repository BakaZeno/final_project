import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    const result = await pool.query(
      `
      SELECT users.*, roles.name AS role
      FROM users
      JOIN roles ON users.role_id = roles.id
      WHERE users.email = $1 AND users.password = $2
      `,
      [email, password]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "Login failed" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}