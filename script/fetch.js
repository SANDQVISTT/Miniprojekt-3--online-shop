
//fetch
//exporterar till display.js
export async function fetchUrl(){
    const url = "https://firstdatabaseproject-ab7fe-default-rtdb.europe-west1.firebasedatabase.app/.json";
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
