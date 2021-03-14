export const postApplication = (token, trialId, userId) => {
    return fetch(`/application/${trialId}/${userId}`, {
        method: "POST",
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

export const getAllApplication = (token, trialId, orgId) => {
    return fetch(`/application/all/${trialId}/${orgId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(err => console.log(err));
}
