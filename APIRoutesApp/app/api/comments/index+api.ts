import { comments } from "../../../data/comments";

export async function GET() {
  return Response.json(comments);
}