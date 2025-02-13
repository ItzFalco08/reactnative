import { View, Text, Image } from "react-native";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react-native";

export default function HomeScreen() {
  const imageUrl =
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>          
    {/* Custom Nav for home page */}
    <View className="w-full h-[80px] flex-row items-center px-10 pt-20">
      <Image source={require('../../assets/logo.png')} className="w-10 h-10 bg-red-500"/>
    </View>

    {/* Posts  */}
    <View className="flex-1 px-5 pt-[5em]">

      {/* Post */}
      <View className="w-full rounded-3xl px-3 pt-3 pb-5 border-2 border-zinc-800 bg-[#141414] ">

        {/* User */}
        <View className="mb-4 flex-row gap-3 relative items-center">
          <Image className="w-10 h-10 rounded-full bg-red-500"/>
          <View className="h-auto ">
            <Text className="text-white text-lg">RupamDas</Text>
            <Text className="text-zinc-400 text-xs">@rupamdas09</Text>
          </View>
        </View>

        <Image
          className="w-full h-60 rounded-2xl"
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />

        <Text className="text-white mt-2 text-zinc-500"><Text className="font-semibold text-zinc-300">2.3k</Text> likes  <Text className="font-semibold text-zinc-300">•  120.3k</Text> views</Text>

        <View className="flex-row w-full justify-between mt-3 ">
          <View className="flex-row gap-2">
            <Heart stroke='#858585' className="" />
            <MessageCircle stroke='#858585' className="" />
            <Share2 stroke='#858585' className="" />
          </View>

          <Bookmark stroke='#858585' className="" />
        </View>

        <Text className="text-zinc-200 mt-6">English or Spanish?. Whoever moves first is gay Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium ipsa cupiditate quaerat et accusantium perferendis quidem minima sed saepe?</Text>
      </View>
    </View>
    </>
  );
}
