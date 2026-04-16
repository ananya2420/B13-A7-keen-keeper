


const getAllCallListFromLocalDB=()=>{
    const allCallList=localStorage.getItem("callList")
    console.log(allCallList,"allCallList from local DB")


    if(allCallList) return JSON.parse(allCallList);

    return [];
}

const addCallListToLocalDB=(call)=>{

  const allCalls=getAllCallListFromLocalDB();
  const isAlreadyExist=allCalls.find(cl=>cl.id===call.id);

  if(isAlreadyExist){
    allCalls.push(call)
    localStorage.setItem("callList",JSON.stringify(allCalls))
  }
   
  
}
export {getAllCallListFromLocalDB, addCallListToLocalDB}