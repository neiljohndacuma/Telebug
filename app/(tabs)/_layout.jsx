import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon=({icon,color,name,focused})=>{
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                className="w-6 h-10"
            />    
        </View>
    )
}
const TabLayout = () => {
  return (
  <>
    <Tabs>
           <Tabs.Screen
            name="Home"
            options={{
                title:"Home", 
                headerShown:false,
                tabBarIcon: ({color,focused})=>(
                    <TabIcon
                    icon={icons.home}
                    color={color}
                    focused={focused}
                    />
                )
            }}
           />
           <Tabs.Screen
            name="Bookmark"
            options={{
                title:"Bookmark", 
                headerShown:false,
                tabBarIcon: ({color,focused})=>(
                    <TabIcon
                    icon={icons.bookmark}
                    color={color}
                    focused={focused}
                    />
                )
            }}
           />  
            <Tabs.Screen
            name="Search"
            options={{
                title:"Search", 
                headerShown:false,
                tabBarIcon: ({color,focused})=>(
                    <TabIcon
                    icon={icons.search}
                    color={color}
                    focused={focused}
                    />
                )
            }}
           />  
            <Tabs.Screen
            name="Settings"
            options={{
                title:"Settings", 
                headerShown:false,
                tabBarIcon: ({color,focused})=>(
                    <TabIcon
                    icon={icons.Settings}
                    color={color}
                    focused={focused}
                    />
                )
            }}
           />  
    </Tabs>
  </>
  )
}

export default TabLayout

const styles = StyleSheet.create({})