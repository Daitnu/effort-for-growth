import { useState, useEffect } from 'react';
import request from './request';
import HTTPResponse from './http-response';

interface IfetchData {
  isLoading: boolean;
  error: boolean;
  data: object | null;
}

const initialValues: IfetchData = { isLoading: true, error: false, data: null };

const useFetch = (url: string) => {
  const [fetchingData, setFetchingData] = useState<IfetchData>(initialValues);

  useEffect(() => {
    const fetchInitData = async () => {
      setFetchingData(initialValues);

      const response: HTTPResponse = await request.get({ url });
      if (response.getIsError()) {
        setFetchingData({
          isLoading: false,
          error: response.getIsError(),
          data: response.getData(),
        });
      } else {
        setFetchingData({
          isLoading: false,
          error: response.getIsError(),
          data: response.getData(),
        });
      }
    };

    fetchInitData();
  }, [url]);

  return fetchingData;
};

export default useFetch;
