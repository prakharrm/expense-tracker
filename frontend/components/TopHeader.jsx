import { Image, View, TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import React, { useEffect, useState } from "react";
import { getUserData } from "../utils/userdata";
import { router } from "expo-router";

function TopHeader() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData().then((data) => {
      setUserData(data);
    });
  }, []);

  return (
    <View className="flex flex-row items-center justify-between w-full">
      <Image source={icons.cs} className="w-44 h-16" resizeMode="contain" />
      <TouchableOpacity
        onPress={()=>{router.push("../profile")
        }}
      >
        {userData.pfp
          ? <Image source={{ uri: userData.pfp }} className="w-16 h-16 rounded-full" resizeMode="cover" />
          : <Image source={icons.userIcon} className="w-16 h-16 rounded-full" resizeMode="contain" />}
      </TouchableOpacity>

    </View>
  );
}

export default TopHeader;
