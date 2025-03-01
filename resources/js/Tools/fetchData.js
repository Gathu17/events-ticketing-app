import { router } from "@inertiajs/react";


export async function fetchData (url, method = 'GET', data = null, isJson = true, redirect = '') {
 
  const token = document.head.querySelector('meta[name="csrf-token"]').content;
 
  const jsonHeaders = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'X-CSRF-TOKEN': token,
  };

  const noJsonHeaders = {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token,
  };
 
  const methodToSend = method.toUpperCase();
 
  const returnData = {
    response: null,
    error: null
  };

  try {
    console.log(import.meta.env.VITE_APP_URL + url,)
    const resp = await fetch(import.meta.env.VITE_APP_URL + url, {
      method: methodToSend,
      headers: isJson ? jsonHeaders : noJsonHeaders,
      body: data && JSON.stringify(data),
    });
    
    if (resp.ok) {
      const jsonResp = await resp.json();
      returnData.response = jsonResp;
    } else {
      const errorResp = await resp.json();
      returnData.error = errorResp;
    }
  } catch (error) {
    returnData.error = error;
  }

  if (redirect) {
    router.visit(redirect);
  }

  return returnData;
}

