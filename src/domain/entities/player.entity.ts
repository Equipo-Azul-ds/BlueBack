import { PlayerAnswer } from "./playeranswer.entity";


export class Player {
  id: string;
  nickname: string;
  score: number;
  userId: string;
  Answers: PlayerAnswer[];
}