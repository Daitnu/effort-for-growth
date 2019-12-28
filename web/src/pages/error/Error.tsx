import React from 'react';

interface Props {
  message: string;
}

const ErrorPage: React.SFC<Props> = ({ message }) => <div>{message}</div>;

export default ErrorPage;
