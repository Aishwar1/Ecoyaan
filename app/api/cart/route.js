import data from "@/data/mockData.json";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(data);
}