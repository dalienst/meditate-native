import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/components/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'

const AffirmationPractice = () => {
    const { itemId } = useLocalSearchParams()

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>()

    useEffect(() =>{
        for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
            const affirmationsData = AFFIRMATION_GALLERY[i].data

            const affirmationToStart = affirmationsData.find((a) => a.id === Number(itemId))

            if (affirmationToStart) {
                setAffirmation(affirmationToStart)
                return;
            }
        }
    })
  return (
    <View>
      <Text>AffirmationPractice</Text>
    </View>
  )
}

export default AffirmationPractice