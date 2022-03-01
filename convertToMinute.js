function ConvertToMinute(phoneCall){
    const phoneCallArray =  phoneCall.split(',');
    const phoneNumber = phoneCallArray[1] ;
    const time = phoneCallArray[0];
    const timeArray = time.split(':');
    const hr = timeArray[0] ;
    const min = timeArray[1];
    let sec = timeArray[2];
    if(sec !=0){sec = 1}
    const timeInMinute = parseInt(hr*60)+parseInt(min)+ parseInt(sec);
    return timeInMinute;
}
const time = '00:01:07,400-234-090';
// console.log(ConvertToMinute(time))


