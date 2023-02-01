/* eslint-disable prettier/prettier */
import React from 'react';
// import {Image} from 'react-native';
import styled from 'styled-components/native';

const Avatar = ({imageSource}) => {
  const imageOption = {
    uri: imageSource,
  };

  return (
    <ImageCustom source={imageOption}/>
  );
};

const ImageCustom = styled.Image`
  width: 200px;
  height: 200px;
  margin: 10px;
`;
export default Avatar;
