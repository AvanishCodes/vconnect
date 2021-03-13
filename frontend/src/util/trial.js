export const getFilteredTrials=(keyword)=>{
  return fetch(`/search?keyword=${keyword}`,{
    method:"GET"
  })
  .then(response=>{
    return response.json();
  })
  .catch(err=>console.log(err));
}

export const getOrgTrials=(token,orgId)=>{
  return fetch(`/trial/by/org/${orgId}`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
}

export const getUserTrials=(token,userId)=>{
  return fetch(`/trial/filter/${userId}`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
}
