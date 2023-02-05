
export const authEndpoint = "https://accounts.spotify.com/authorize/";

const redirecturi = process.env.REDIRECT_URL;
const clientId = process.env.CLIENT_URL;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "app-remote-control"
]


export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
},{});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// const getParams =  (paraa) => {
//     let parameter = new URLSearchParams(window.location.search)
//     const acess_token = parameter.get(paraa)
//     console.log(acess_token)
// }
