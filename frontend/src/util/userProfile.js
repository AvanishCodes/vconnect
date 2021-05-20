export const postUserProfile=(token,userId,data)=>{
  return fetch(`/userprofile/${userId}`, {
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

export const getUserProfile=(token,userId)=>{
  return fetch(`/userprofile/user/${userId}`, {
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

export const updateUserProfile=(token,userId,userProfileId,data)=>{
  return fetch(`/userprofile/${userProfileId}/${userId}`, {
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
