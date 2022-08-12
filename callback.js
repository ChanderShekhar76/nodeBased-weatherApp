
const add = (a,b,callBack)=>{
    setTimeout(()=>{
        callBack(a+b)
    },2000)
}
add(2,3,(data)=>{
    console.log(data)
})
