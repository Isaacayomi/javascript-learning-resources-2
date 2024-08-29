export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    // Handling error
    if (!res.ok) {
      // data.message is coming from the res.json() data
      throw new Error(`${data.message} (${res.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
