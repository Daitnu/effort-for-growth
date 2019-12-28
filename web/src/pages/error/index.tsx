import React from 'react';

interface Props {
  message: string;
}

const ErrorPage = ({ message }: Props) => <div>{message}</div>;

export default ErrorPage;
