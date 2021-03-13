export const getTrials=(keyword)=>{
  return fetch(`/search?keyword=${keyword}`,{
    method:"GET"
  })
  .then(response=>{
    return response.json();
  })
  .catch(err=>console.log(err));
}
