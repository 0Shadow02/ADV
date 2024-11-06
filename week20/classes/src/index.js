"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpful_decorators_1 = require("helpful-decorators");
class Dateclass {
    constructor(timezone) {
        this.timezone = timezone;
    }
    getTime() {
        const time = new Date();
        console.log("hi from getTime");
        return time;
    }
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
__decorate([
    helpful_decorators_1.once
], Dateclass.prototype, "getTime", null);
__decorate([
    helpful_decorators_1.measure
], Dateclass.prototype, "getMonth", null);
const dateObject = new Dateclass("IND");
dateObject.getTime(); // This will log "hi from getTime" and return the current time.
dateObject.getTime(); // This will not log anything or return a new time due to the @once() decorator.
dateObject.getTime(); // Same as above.
dateObject.getMonth(); // this will measure the time.
// Uncomment to use the other methods
// const gtz = dateObject.getTimezone();
// console.log(gtz);
// console.log(`The timezone is ${dateObject.getCountry()}`);
