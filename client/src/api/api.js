export const testGetCensor = async () => {
  const response = await fetch('/censor').catch(console.error);
  if (!response.ok) {
    throw Error(response?.statusText);
  }

  const responseData = await response.json();

  return responseData;
};

export const censorDocument = async (data) => {
  const response = await fetch('/censor', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      type: 'formData',
    },
    body: data,
  }).catch(console.error);
  if (!response.ok) {
    throw Error(response?.statusText);
  }

  const responseData = await response.json();

  return responseData;
};
