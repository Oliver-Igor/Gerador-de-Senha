import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput 
    style={styles.Inputer} 
    placeholder="pass"
    value={props.pass}
    caretHidden={true}
    ></TextInput>
  );
}