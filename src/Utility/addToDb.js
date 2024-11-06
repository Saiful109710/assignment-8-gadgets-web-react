// get local storage

import toast from "react-hot-toast";

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
        toast.error(`item already added in ${key}`)
    }else{
        storedData.push(gadget)
        localStorage.setItem(key,JSON.stringify(storedData))
        toast.success(`${key} added successfully`)
    }

}

const removeFromLocalStorageData = (key,id)=>{

    const storedData = getToLocalStorage(key);
    const remainingData = storedData.filter((singleData)=>singleData.id !==id);
    localStorage.setItem(key,JSON.stringify(remainingData))
    toast.success(`${key} successfully remove`)

}

export {getToLocalStorage,setToLocalStorage,removeFromLocalStorageData}

// set local storage


// remove local storage