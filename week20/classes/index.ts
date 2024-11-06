
class Dateclass {
    private timezone:string
     constructor (timezone:string){
        this.timezone= timezone
    }

    getTime(){
        const time= new Date()
        return time
    }
    getMonth(){
        const month= new Date().getMonth
        return month
    }
    getCountry(){
        return this.timezone
    }
}

const dateObject = new Dateclass("IND")
const getTime = dateObject.getTime()

console.log(getTime)