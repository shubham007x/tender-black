import { CounterModel } from "../model/CounterModel";

export const CounterIntent = {
  increment: () => CounterModel.inc$.next(),
  decrement: () => CounterModel.dec$.next(),
  reset: () => CounterModel.reset$.next(),
  toggleAutoIncrement: () => CounterModel.toggleAutoInc(),
};
