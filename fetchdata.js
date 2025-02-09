async function getdata(){
    try{
    let res =await fetch("https://movies-ad738-default-rtdb.firebaseio.com/kidproducts.json")
    let data = await res.json()
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
getdata()