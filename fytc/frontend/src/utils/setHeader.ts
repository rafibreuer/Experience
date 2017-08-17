export default function setHeader() {
    return {
        headers: { 'x-access-token': (localStorage.getItem('fytcId')) }
    };
}
