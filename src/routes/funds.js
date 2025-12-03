import { neon } from '@neondatabase/serverless';

export async function GET() {
  const sql = neon(process.env.DATABASE_URL);
  const funds = await sql`SELECT * FROM funds`;

  return new Response(JSON.stringify(funds), {
    headers: { 'Content-Type': 'application/json' }
  });
}
