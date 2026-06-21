import pool from "@/lib/db";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role_id = formData.get("role_id");

    await pool.query(
      `
      INSERT INTO users (name, email, password, role_id)
      VALUES ($1, $2, $3, $4)
      `,
      [name, email, password, role_id]
    );

    return new Response("สมัครสมาชิกสำเร็จ", { status: 200 });

  } catch (err) {
    console.log(err);
    return new Response("Error", { status: 500 });
  }
}