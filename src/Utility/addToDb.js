// get local storage

const getToLocalStorage = ()=>{
    const storedData = localStorage.getItem('gadget');
    if(storedData){
        return JSON.parse(storedData)
    }else{
        return []
    }
}

const setToLocalStorage=(gadget)=>{
    console.log(gadget)
    const storedData = getToLocalStorage();
    if(storedData.find((singleGadget)=>singleGadget.id===gadget.id)){
        alert("gadget already added")
    }else{
        storedData.push(gadget)
        localStorage.setItem('gadget',JSON.stringify(storedData))
    }

}

export {getToLocalStorage,setToLocalStorage}

// set local storage


// remove local storage