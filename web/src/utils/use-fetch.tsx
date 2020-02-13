import { useState, useEffect } from 'react';
import request from './request';
import HTTPResponse from './http-response';

interface IfetchData {
  isLoading: boolean;
  error: boolean;
  data: object | null;
}

const initialValues: IfetchData = { isLoading: true, error: false, data: null };

const useFetch = (url: string): IfetchData => {
  const [fetchingData, setFetchingData] = useState<IfetchData>(initialValues);

  useEffect(() => {
    const fetchInitData = async () => {
      setFetchingData(initialValues);

      const response: HTTPResponse = await request.get({ url });
      const isError = response.getIsError();
      const data = response.getData();

      setFetchingData({ isLoading: false, error: isError, data });
    };

    fetchInitData();
  }, [url]);

  return fetchingData;
};

export default useFetch;
