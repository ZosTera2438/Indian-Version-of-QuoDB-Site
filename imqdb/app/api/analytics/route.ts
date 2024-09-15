import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
    const totalQuotes = await prisma.quotes.count();
    return NextResponse.json({ quotes: totalQuotes }, { status: 200 });
};