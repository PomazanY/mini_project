import backendInstance from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const registerUser = requestDecorator(async payload => {
    const {data} = await backendInstance.post("/auth/register", payload);
    return data;
})

export const contactUser = async (payload) => {
    console.log("Форма отправлена:", payload);
    return {}; 
  }

