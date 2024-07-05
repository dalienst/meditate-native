import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { GalleryPreviewData } from '@/components/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons';

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams()

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
    const [sentences, setSentences] = useState<string[]>([])

    useEffect(() =>{
        for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
            const affirmationsData = AFFIRMATION_GALLERY[i].data

            const affirmationToStart = affirmationsData.find((a) => a.id === Number(itemId))

            if (affirmationToStart) {
                setAffirmation(affirmationToStart)

                const affirmationsArray = affirmationToStart.text.split(".")

                if(affirmationsArray[affirmationsArray.length - 1] === ""){
                    affirmationsArray.pop()
                }

                setSentences(affirmationsArray)
                return;
            }
        }
    }, [itemId])

  return (
    <View className='flex-1'>
      <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1'>
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>

            <Pressable onPress={() => router.back()}  >
                <AntDesign name="leftcircleo" size={24} color="white" />
            </Pressable>

            <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                <View className='h-full justify-center'>
                    <View className='h-4/5 justify-center'>
                    {sentences?.map((sentence, index) => (
                        <Text key={index} className='text-white font-bold mb-12 text-center'>{sentence}.</Text>
                    ))}
                    </View>
                </View>
            </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice