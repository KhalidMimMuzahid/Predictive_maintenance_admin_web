export const GetLocalStorageData = (storageName) => {
  return JSON.parse(localStorage.getItem(storageName));
};
