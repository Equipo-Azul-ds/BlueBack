import { ChallengeProgress } from "../entities/challengeprogress.entity";


export class Challenge {
  id: string;
  deadline: Date;
  status: string;
  kahootId: string;
  assignerId: string;
  challengeProgress?: ChallengeProgress[];
  optionId: string;
  slideId: string;
  userId: string;
}