import {format, formatDistanceToNow, add, sub, isBefore, isAfter, isEqual, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, parseISO, parse} from "date-fns";

export default class DateTime {
    date: Date;

    constructor(date: string | Date) {
        this.date = typeof date === "string" ? parseISO(date) : date;
    }

    static now() {
        return new DateTime(new Date());
    }

    static parse(dateString: string, formatString: string) {
        return new DateTime(parse(dateString, formatString, new Date()));
    }

    format(formatString: string): string {
        return format(this.date, formatString);
    }

    add(days = 0, hours = 0, minutes = 0, seconds = 0) {
        this.date = add(this.date, {days, hours, minutes, seconds});
        return this;
    }

    sub(days = 0, hours = 0, minutes = 0, seconds = 0) {
        this.date = sub(this.date, {days, hours, minutes, seconds});
        return this;
    }

    isBefore(date: Date | DateTime): boolean {
        return isBefore(this.date, date instanceof DateTime ? date.date : date);
    }

    isAfter(date: Date | DateTime): boolean {
        return isAfter(this.date, date instanceof DateTime ? date.date : date);
    }

    isEqual(date: Date | DateTime): boolean {
        return isEqual(this.date, date instanceof DateTime ? date.date : date);
    }

    diffInDays(date: Date | DateTime): number {
        return differenceInDays(this.date, date instanceof DateTime ? date.date : date);
    }

    diffInHours(date: Date | DateTime): number {
        return differenceInHours(this.date, date instanceof DateTime ? date.date : date);
    }

    diffInMinutes(date: Date | DateTime): number {
        return differenceInMinutes(this.date, date instanceof DateTime ? date.date : date);
    }

    diffInSeconds(date: Date | DateTime): number {
        return differenceInSeconds(this.date, date instanceof DateTime ? date.date : date);
    }

    fromNow(): string {
        return formatDistanceToNow(this.date);
    }
}
