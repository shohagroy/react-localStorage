

const setWork = {}
const setWorkToLocalStorage = (id)=>{
    
    setWork[id] = 1;
    localStorage.setItem("id", JSON.stringify(setWork))
}

export {setWorkToLocalStorage}