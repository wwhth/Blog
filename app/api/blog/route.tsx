import { NextRequest, NextResponse } from "next/server";
import * as server from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ name: "zyz" });
}
