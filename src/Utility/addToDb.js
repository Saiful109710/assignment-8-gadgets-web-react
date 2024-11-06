// get local storage

const getToLocalStorage = (key)=>{
    const storedData = localStorage.getItem(key);
    if(storedData){
        return JSON.parse(storedData)
    }else{
        return []
    }
}

const setToLocalStorage=(key,gadget)=>{
    console.log(gadget)
    const storedData = getToLocalStorage(key);
    if(storedData.find((singleGadget)=>singleGadget.id===gadget.id)){
        alert(`item already added in ${key}`)
    }else{
        storedData.push(gadget)
        localStorage.setItem(key,JSON.stringify(storedData))
    }

}

const removeFromLocalStorageData = (key,id)=>{

    const storedData = getToLocalStorage(key);
    const remainingData = storedData.filter((singleData)=>singleData.id !==id);
    localStorage.setItem(key,JSON.stringify(remainingData))

}

export {getToLocalStorage,setToLocalStorage,removeFromLocalStorageData}

// set local storage


// remove local storage