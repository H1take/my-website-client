import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type MetaPropsType = {
  title: string;
  description: string;
  name: string;
  type: string;
};

const Meta: FC<MetaPropsType> = ({ title, description, name, type }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default Meta;
