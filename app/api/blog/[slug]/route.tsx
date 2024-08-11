import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("req: ", req);
  return NextResponse.json(111);
}
