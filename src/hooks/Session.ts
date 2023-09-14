import AsyncStorage from "@react-native-async-storage/async-storage"

export const useSession = () => {
    const set = async (key: string, value: any) => {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }
    const get = async (key: string, haveParse: boolean = false) => {
        const response = await AsyncStorage.getItem(key)
        
        if (haveParse && response) {
            const parse = JSON.parse(response)
            return parse;        
        }

        return response;
    }
    return {
        get,
        set
    } 
  }