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

export const getTrial=(token,trialId)=>{
  return fetch(`/trial/${trialId}`, {
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

export const updateTrial=(token,trialId,orgId,data)=>{
  return fetch(`/trial/${trialId}/${orgId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
}
