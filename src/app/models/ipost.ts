import { Iuser } from "./iuser";

export interface Ipost {
  id: number,
  title?: string,
  content?: string,
  image?: string,
  user: Iuser,
  createAt: string,
  numberOfReact: number,
  numberOfComment: number,
  isReact: 0 | 1 | 2, //0 = no ,1 = like , 2 = love
  sharedPost?: Ipost,
  privacy: number //0=>public 1=>friend 2=>private
}
