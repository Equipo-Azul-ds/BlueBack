import { GroupMember } from "../entities/groupmember.entity";

export class Group {
  id: string;
  name: string;
  description: string;
  usersIds: string[];
  members: GroupMember[];
  creatorId: string;
} 