import BaseEntity from './baseEntity';

interface Campaign extends BaseEntity {
  date: Date;
  campaignsId: string;
  clicks: number;
  cost: string;
}

export default Campaign;
