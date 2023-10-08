const BASE_URL = "https://api.noroff.dev/api/v1/online-shop";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
