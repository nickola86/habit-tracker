import { t } from "i18next";

export const addDays = (d: Date, days: number): Date => {
    const date = new Date(d);
    date.setDate(date.getDate() + days);
    return date
}

export const addMonths = (d: Date, months: number): Date => {
    const date = new Date(d);
    date.setMonth(date.getMonth() + months);
    return date
}
export const getMonthName = (d: Date): string => {
    return t("month_"+d.getMonth());
}
export const getShortYear = (d:Date): string => {
    return d.getFullYear().toString().substring(2,4)
}
export const getMonthAndShortYear = (d:Date): string => {
    return getMonthName(d)+" '"+getShortYear(d)
}
export const getDateAsText = (d:Date): string => {
    return d.getDate()+' '+getMonthName(d)+" '"+getShortYear(d)
}
export const isSameDate = (d1:Date,d2:Date): boolean => {
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

export const format = (d:Date): string => {
    if(typeof d === 'string'){
        const _d = new Date(d)
        return _d.getDate() + ' ' + getMonthName(_d) + ' ' + _d.getFullYear()
    }else{
        return d.getDate() + ' ' + getMonthName(d) + ' ' + d.getFullYear()
    }
}
export const getCalendar = (selectedDate: Date): Date[] => {
    //Es, 20 feb 2023
    let d = new Date(selectedDate)
    //Set 1 feb 2023
    const firstDateOfMonth = new Date(new Date(d).setDate(1))
    //+1 month ==> 1 mar 2023
    d = new Date(firstDateOfMonth)
    d = new Date(d.setMonth(d.getMonth()+1))
    let daysRange = Array.from(Array(42).keys())
    let firstDayOfMonth = firstDateOfMonth.getDay()
    firstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth
    daysRange = daysRange.map(e=>e-firstDayOfMonth+2)
    let dateRange: Date[] = daysRange.map(e=>new Date(new Date(firstDateOfMonth).setDate(e)))
    if(dateRange[dateRange.length-1].getDate()>7) dateRange.splice(-7)
    return dateRange
}

export const weekdays = (): string[] => {
    return [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ]
}