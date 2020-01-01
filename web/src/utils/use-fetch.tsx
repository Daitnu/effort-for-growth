import { useState, useEffect } from 'react';
import request from './request';

interface IfetchData {
  isLoading: boolean;
  error: boolean;
  data: object | null;
}

const initialValues: IfetchData = { isLoading: true, error: false, data: null };

const useFetch = (URL: string) => {
  const [fetchingData, setFetchingData] = useState<IfetchData>(initialValues);

  useEffect(() => {
    const fetchInitData = async () => {
      setFetchingData(initialValues);

      const { isError, data } = await request.get(URL);
      if (isError) {
        setFetchingData({ isLoading: false, error: data, data: null });
      } else {
        setFetchingData({ isLoading: false, error: null, data });
      }
    };

    fetchInitData();
  }, [URL]);

  return fetchingData;
};

export default useFetch;
