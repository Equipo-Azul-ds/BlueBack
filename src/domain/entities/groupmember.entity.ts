import { User } from "../aggregates/user.aggregate";

export class GroupMember {
  id: string;
  user: User;
  role: string;
}