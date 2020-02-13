import React from 'react';

interface Props {
  message: string;
}

export const ErrorPage: React.FunctionComponent<Props> = ({ message }) => <div>{message}</div>;
