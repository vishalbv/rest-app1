export const convertArrayFromFirestore = (obj) => {
    if(obj) {
        return Object.keys(obj).map(i => ({id: i,...obj[i]}))
    } else {
        return [];
    }
}