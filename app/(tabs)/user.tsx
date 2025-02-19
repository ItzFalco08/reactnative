import { View, Text, Image, TouchableOpacity } from "react-native";


export default function User() {
    return(
        <View>
            <Image source={{uri: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} className="w-full h-[220px]">
             
            </Image>
            <View className="w-full h-full relative top-[-2em] rounded-t-[40px] bg-black">
                <View className="w-full relative flex-row justify-between p-4 h-[90px] px-10">
                    <View className=" flex items-center ">
                        <Text className="text-white font-bold text-lg">1K</Text>
                        <Text className="text-zinc-500 font-medium">Followers</Text>
                    </View>

                    <View className="relative top-[-5em] flex items-center">
                        <Image className="w-[7em] border-[4px] border-black h-[7em] rounded-full bg-red-500" source={{uri:'https://avatarfiles.alphacoders.com/324/thumb-1920-324387.jpg'}} />
                        <Text className="text-white font-semibold text-xl mt-3">@rupamdas07</Text>
                    </View>

                    <View className="flex items-center ">
                        <Text className="text-white font-bold text-lg">283</Text>
                        <Text className="text-zinc-500 font-medium">Following</Text>
                    </View>
                </View>

                <View className="">
                    <Text className="text-zinc-400 mx-10 text-center">I am a fullstack web and app developer. Having 2+ years of experience. </Text>
                </View>

                <View className="w-full flex-row justify-center my-4 gap-3">
                    <TouchableOpacity className="bg-blue-500 w-[7em] flex items-center py-2 rounded-xl">
                        <Text className="text-white">Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white w-[7em] py-2 rounded-xl flex items-center">
                        <Text className="text-black">Message</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text className="text-white">User</Text>
        </View>
    )
}
