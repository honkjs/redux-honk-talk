import { IHonkStore } from '@honkjs/store';
import { IHonk } from '@honkjs/honk';

export type MyServices = {
  honk: IHonk;
  store: IHonkStore<{ count: number }>;
  url: string;
};
