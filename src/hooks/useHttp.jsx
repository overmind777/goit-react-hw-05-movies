import { useEffect, useState } from 'react';

const useHttp = (fn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fn(param)
      .then(data => {
        return setData(data);
      })
      .catch(error => setError(error.message));
  }, [fn, param]);
  return [data, setData, { error }];
};

export default useHttp;
