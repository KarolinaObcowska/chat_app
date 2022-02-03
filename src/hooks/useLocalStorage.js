import { useEffect, useState } from 'react';

const PREFIX = 'chating-app-';

function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [user, setUser] = useState();
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== 'undefined' && jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
    setUser(localStorage.getItem(prefixedKey));
  }, [value, user]);

  return [value, setValue];
}

export default useLocalStorage;
