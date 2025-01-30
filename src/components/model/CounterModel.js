import { BehaviorSubject, merge, interval, EMPTY } from "rxjs";
import { map, scan, startWith, switchMap } from "rxjs/operators";


const count$ = new BehaviorSubject(0); // Holds the current count
const inc$ = new BehaviorSubject(() => {}); // Emits increment operations
const dec$ = new BehaviorSubject(() => {}); // Emits decrement operations
const reset$ = new BehaviorSubject(() => {}); // Emits reset operations
const autoInc$ = new BehaviorSubject(false); // Holds the auto-increment toggle state

const Update$ = merge(
  inc$.pipe(map(() => (count) => Math.min(count + 1, 98))), // Increment operation
  dec$.pipe(map(() => (count) => Math.max(count - 1, 0))), // Decrement operation
  reset$.pipe(map(() => () => 0)), // Reset operation
  autoInc$.pipe(
    switchMap((enabled) =>
      enabled
        ? interval(1100).pipe(map(() => (count) => Math.min(count + 1, 98)))
        : EMPTY
    )
  )
).pipe(
  startWith(() => 0), 
  scan((count, operation) => operation(count), 0)
);

const toggleAutoInc = () => {
  autoInc$.next(!autoInc$.value);
};


export const CounterModel = {
  count$,
  inc$,
  dec$,
  reset$,
  autoInc$,
  Update$,
  toggleAutoInc,
};
