import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const user = () => {
  const { toggleDarkMode, colors } = useTheme();
  const userStyles = createUserStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={userStyles.container}>
      <View>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text style={userStyles.title} >
            MUDA TEMA
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default user