export const convertToDuit = (bilangan) => {
    var	reverse = bilangan.toString().split('').reverse().join(''),
        ribuan 	= reverse.match(/\d{1,3}/g);
        ribuan	= ribuan.join('.').split('').reverse().join('');

    return ribuan
}

export const fakePrice = (price) => {
    return price - (price*15/100)
}