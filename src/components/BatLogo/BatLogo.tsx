import React from 'react';
import { View, Text, Image } from 'react-native';
import batlogo from '../../../assets/bat-logo.png'

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>Bat Pass Generator</Text>
        <Image source={batlogo} style={styles.batImage}></Image>
    </>
  );
}