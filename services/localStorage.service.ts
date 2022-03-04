import data from "../data/data.json";

const localStorageService = (localStorageKey: string) => {
  const getData = () => {
    const storedData = localStorage.getItem(localStorageKey);

    if (storedData) {
      return JSON.parse(storedData);
    }

    localStorage.setItem(localStorageKey, JSON.stringify(data));

    return data;
  };

  const setData = (data: string) => {
    localStorage.setItem(localStorageKey, data);
  };

  return { getData, setData };
};

export default localStorageService;
