import { ChallengeAnswer } from "./challengeanswer.entity";

export class ChallengeProgress {
  id: string;
  status: string;
  score: number;
  userId: string;
  challengeAnswers?: ChallengeAnswer[];
}