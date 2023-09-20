import { Iuser } from "./iuser";

export interface Icomment {
  id: number,
  content: string,
  user: Iuser,
  commentDate: Date,
  postId: number,
}
