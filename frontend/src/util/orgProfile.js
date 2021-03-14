export const postOrgProfile=(token,orgId,data)=>{
  return fetch(`/orgprofile/${orgId}`, {
    method: "POST",
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
