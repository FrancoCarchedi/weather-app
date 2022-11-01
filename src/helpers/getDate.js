export const getDate = () => {
    let date = new Date();

    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    date = dd + '/' + mm + '/' + yyyy;

    return date;
}