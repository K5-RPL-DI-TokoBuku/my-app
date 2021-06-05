export const convertToDuit = (bilangan) => {
    var	reverse = bilangan.toString().split('').reverse().join(''),
        ribuan 	= reverse.match(/\d{1,3}/g);
        ribuan	= ribuan.join('.').split('').reverse().join('');

    return ribuan
}

export const fakePrice = (price) => {
    return price - (price*15/100)
}

export const convertToRupiah = (inputan_number) => {
    var	reverse = inputan_number.toString().split('').reverse().join(''),
        ribuan 	= reverse.match(/\d{1,3}/g);
        ribuan	= ribuan.join('.').split('').reverse().join('');

    return `Rp. ${ribuan}`
}

export const discountPrice = (inputan_number) => {
    let result = inputan_number - (inputan_number*15/100)
    return result
}