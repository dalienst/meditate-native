import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import beachImage from "@/assets/meditation-images/beach.webp";
import {StatusBar} from 'expo-status-bar'
import CustomButton from '@/components/CustomButton';


const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
        <LinearGradient className='flex-1' colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>

          <SafeAreaView className='flex-1 mx-5 my-16 justify-between'>
            <View>
              <Text className='text-white text-center font-bold text-4xl'>Easy Meditation</Text>
              <Text className='text-center text-white text-regular text-2xl mt-3'>Meditation made easy</Text>
            </View>

            <View>
              <CustomButton onPress={() => alert('hello')} title="Get Started" />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>

        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App