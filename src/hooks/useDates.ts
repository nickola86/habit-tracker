import { t } from "i18next";

export const addDays = (d: Date, days: number): Date => {
    const date = new Date(d);
    date.setDate(date.getDate() + days);
    return date
}
export const getMonthName = (d: Date): string => {
    return t("month_"+d.getMonth());
}
export const getShortYear = (d:Date): string => {
    return d.getFullYear().toString().substring(2,4)
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