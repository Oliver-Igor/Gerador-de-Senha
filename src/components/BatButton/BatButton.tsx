import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let newPass = generatePass()
    setPass (newPass)
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }
  return (
    <>
        <BatTextInput pass={pass}/>

        <Pressable onPress={handleGenerateButton} style={styles.botao}>
            <Text style={styles.text}>GERAR</Text>
        </Pressable>
        <Pressable onPress={handleCopyButton} style={styles.botao}>
            <Text style={styles.text}>COPY ✔</Text>
        </Pressable>
        
    </>
  );
}