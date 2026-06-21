export default function RegisterPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>สมัครสมาชิก</h1>

      <form action="/api/register" method="POST">

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <br /><br />

        <select name="role_id" required>
          <option value="">เลือกประเภทบัญชี</option>
          <option value="2">HR</option>
          <option value="3">Applicant</option>
        </select>

        <br /><br />

        <button type="submit">
          สมัครสมาชิก
        </button>

      </form>
    </div>
  );
}