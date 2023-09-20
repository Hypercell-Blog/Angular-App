import { Iuser } from "./iuser";

export interface Ireact {
  type: 0 | 1 | 2, //1=like 2=love
  user: Iuser,
  postId: number,
}
