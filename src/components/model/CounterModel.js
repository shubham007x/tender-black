import { BehaviorSubject, merge, interval, EMPTY } from "rxjs";
import { map, scan, startWith, switchMap } from "rxjs/operators";


const count$ = new BehaviorSubject(0); 
const inc$ = new BehaviorSubject(() => {}); 
const dec$ = new BehaviorSubject(() => {}); 
const reset$ = new BehaviorSubject(() => {}); 
const autoInc$ = new BehaviorSubject(false); 

const Update$ = merge(
  inc$.pipe(map(() => (count) => Math.min(count + 1, 98))), 
  dec$.pipe(map(() => (count) => Math.max(count - 1, 0))),
  reset$.pipe(map(() => () => 0)),
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
