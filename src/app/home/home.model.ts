import { Time } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Home{
    date?:Date;
    busid:string;
    time:Date;
    state?: 'IN' | 'OUT' | null;
}