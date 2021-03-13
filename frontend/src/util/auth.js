export const signup = (data) => {
  return fetch(`/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
};

export const login = (data) => {
  return fetch(`/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    if (data.org) {
      localStorage.setItem("org", JSON.stringify(data))
    } else {
      localStorage.setItem("user", JSON.stringify(data))
    }

    next();
  }
};



export const isOrg = () => {
  if (typeof window == "undefined") {
    return false
  }
  if (localStorage.getItem("org")) {
    return JSON.parse(localStorage.getItem("org"));
  } else {
    return false;
  }
};

export const isUser = () => {
  if (typeof window == "undefined") {
    return false
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};
