import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest): string | null => {
  try {
    const token = request.cookies.get("token")?.value || '';

    if (!token) {
      throw new Error("Token not found");
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

    return decodedToken.id;
  } catch (error: any) {
    console.error("JWT Error:", error.message);
    return null;
  }
};
