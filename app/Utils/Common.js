/*
    contains the  functions used for common utilites and other entities.
*/


/*
    this function is used for formatting dates
*/
export default function formatDate(value) {
    var date = new Date(value);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
}