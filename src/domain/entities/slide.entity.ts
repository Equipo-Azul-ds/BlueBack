import { Option } from "./option.entity";

export class Slide {
  id: string;
  type: string;
  text?: string;
  mediaUrl?: URL;
  timelimit: number;
  points: number;
  sequence: string;
  options?: Option[];
}