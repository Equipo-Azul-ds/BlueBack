import { notification } from '../entities/notification.entity';
import { suscription } from '../entities/suscription.entity';

export class User {
  id: string;
  userType: string;
  gameStreak: number;
  TotalScore: number;
  email: string;
  description: string;
  name: string;
  language: string;
  theme: string;
  password: string;
  notifications?: notification[];
  suscription?: suscription;
}
