export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
         return { "Content-Type":"application/json",
             Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
        //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return {};
    }
}