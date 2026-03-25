import { createHomeStyles } from '@/assets/styles/home.styles';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const settings = () => {
  const { colors, toggleDarkMode } = useTheme();
  const homeStyles = createHomeStyles(colors);
  


  return (
    
    <LinearGradient
          colors={colors.gradients.background}
          style={homeStyles.container}
        >
    <View>
      <TouchableOpacity onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>

    </View>
    </LinearGradient>
  )
}

export default settings