import React from 'react';

interface Props {
  message: string;
}

export const ErrorPage: React.FC<Props> = ({ message }) => <div>{message}</div>;
