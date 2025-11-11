import { payment } from './payment.entity';
import { PlanSuscription } from './plansuscription.entity';

export class suscription {
  id: string;
  status: string;
  startDate: Date;
  endDate: Date;
  plansuscription: PlanSuscription[];
  payments?: payment[];
}
