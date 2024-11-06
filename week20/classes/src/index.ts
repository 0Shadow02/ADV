import { measure, once } from "helpful-decorators";

class Dateclass {
    private timezone: string;

    constructor(timezone: string) {
        this.timezone = timezone;
    }

    @once
    // only run once decorator
    getTime() {
        const time = new Date();
        console.log("hi from getTime");
        return time;
    }
    @measure
    // it measure time
    getMonth() {
        const month = new Date().getMonth();
        return month;
    }

    getCountry() {
        return this.timezone;
    }

    getTimezone() {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return tz;
    }
}

const dateObject = new Dateclass("IND");
dateObject.getTime(); // This will log "hi from getTime" and return the current time.
dateObject.getTime(); // This will not log anything or return a new time due to the @once() decorator.
dateObject.getTime(); // Same as above.
dateObject.getMonth(); // this will measure the time.

// Uncomment to use the other methods
// const gtz = dateObject.getTimezone();
// console.log(gtz);
// console.log(`The timezone is ${dateObject.getCountry()}`);
