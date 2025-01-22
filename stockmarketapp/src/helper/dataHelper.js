export const convertDateToUnixTimeStamp =(date) =>{
    return Math.floor(new Date(date).getTime() / 1000)


}


export const converUnixTimeSatmpToDate  =(unixTimeStamp) =>{
         const milliSeconds =unixTimeStamp * 10000;
         return new Date(milliSeconds).toLocaleDateString()   ;
}


export const createDate =(date,days,weeks,months,years) =>{
     const newDate = new Date(date);
     newDate.setDate(newDate.getDate() + days + 7 * weeks);
     newDate.setMonth(newDate.getMonth() + months);
     newDate.setFullYear(newDate.getFullYear() + years);
     return newDate;
}