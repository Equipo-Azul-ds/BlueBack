import { Player } from "../entities/player.entity";

export class GameSession {
  id: string;
  pin: string;
  status: string;
  currentSlideindex: number;
  mode: string;
  hostId: string;
  groupId: string;
  kahootId: string;
  players: Player[];
  useractiveId?: string;
  slideId: string;
  optionId: string;
}