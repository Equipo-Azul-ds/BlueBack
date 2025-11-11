import { User } from "./user.aggregate";
import { Slide } from "../entities/slide.entity";

export class Kahoot {
  id: string;
  title: string;
  description: string;
  visibility: string;
  kahootImage?: URL;
  authorId: string;
  slides?: Slide[];
}