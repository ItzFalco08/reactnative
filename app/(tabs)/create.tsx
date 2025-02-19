import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Home, UserRound } from 'lucide-react-native';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <View className="w-full pb-5 flex-row justify-between px-4 pt-[4em]">
                <Home stroke="#808080" className="text-white" />
                <Text className="font-semibold text-xl text-white">Create Post</Text>
                <UserRound stroke="#808080" />
            </View>

            <View className="px-4 py-[2em] flex gap-4">

                <TextInput
                    className="w-full h-[50px] rounded-xl bg-zinc-900 text-white px-4"
                    placeholderTextColor="#858585"
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    className="w-full h-[200px] rounded-xl bg-zinc-900 text-white px-4 pt-4"
                    placeholderTextColor="#858585"
                    placeholder="Enter Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true} // Enables text wrapping and multi-line input
                    textAlignVertical="top" // 👈 FIXES FLOATING PLACEHOLDER ISSUE
                />

                <TouchableOpacity className="bg-blue-500 w-full  py-3 rounded-lg flex items-center">
                    <Text className="text-white">Post</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
