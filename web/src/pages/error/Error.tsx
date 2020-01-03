import React from 'react';

interface Props {
  message: string;
}

export const ErrorPage: React.SFC<Props> = ({ message }) => <div>{message}</div>;
