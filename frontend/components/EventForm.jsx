import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import icons from "../constants/icons"

const EventForm = ({icon, value, placeholder, handleChangeText, ...props}) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className=" my-2 w-full ">
      <View className="bg-darkgray border-1 focus:border-white  p-3 h-20  w-full rounded-full items-center flex-row">
        <View className="bg-secondary rounded-full h-14 w-14 flex items-center justify-center">
            <Image source={icon} className='h-7 w-7 mx-1' resizeMode='contain'/>
        </View>

        <TextInput
          className="flex-1 px-5 text-white text-xl font-pregular"
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#A6A6A6'
          selectionColor={'#ffffff'}
          onChangeText={handleChangeText}

        />
       
      </View>
    </View>
  )
}

export default EventForm
