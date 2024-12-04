import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Constants from 'expo-constants';
import * as Google from "expo-auth-session/providers/google";

import { ButtonLoginImage, ButtonLoginSocial } from "../SocialFooter/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EXPO_REDIRECT_PARAMS = {
    useProxy: true,
    projectNameForProxy: '@leandro_ramos/contrate-me',
  };
  
  const NATIVE_REDIRECT_PARAMS = { native: 'com.contrateme://' };
  
  const REDIRECT_PARAMS =
    Constants.appOwnership === 'expo'
      ? EXPO_REDIRECT_PARAMS
      : NATIVE_REDIRECT_PARAMS;

export default function ButtonLoginGoogle(){
    const imageGoogle = require("../../../assets/google-icon.png")

    const navigation = useNavigation();

    //
    // console.log(Constants.appOwnership, REDIRECT_PARAMS)


    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null)
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: 'contrate-me',
        androidClientId: "919116426765-gpngkclkuits9bck23o9e3juhj363o9t.apps.googleusercontent.com",
        iosClientId: "919116426765-9nhmkvuno2lggpraa1tnrac9vv4d23l5.apps.googleusercontent.com",
        webClientId: "919116426765-63hkm3id4dtbsjapu3lirqbi369qfh6h.apps.googleusercontent.com",
        useProxy: true
    });

    useEffect(() => {
        handleEffect();
    }, [response, token]);

    async function handleEffect() {
        const user = await getLocalUser();
        if (!user) {
            if (response?.type === "success") {

                setToken(response.authentication.accessToken);
                await getUserInfo(response.authentication.accessToken);
                navigation.navigate('ConfirmEmail')

            }
        } else {
            setUserInfo(user);
            if(response.authentication.accessToken){
                let tempUser = {name: user.given_name, email: user.email, methodLogin: 'google'}
                await AsyncStorage.setItem('tempUser', JSON.stringify(tempUser))
                navigation.navigate('ConfirmEmail')
            }
        }
    }

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            await AsyncStorage.setItem('tempUser', JSON.stringify(user))
            setUserInfo(user);
        } catch (error) {
            // Add your own error handler here
        }
    };

    const getLocalUser = async () => {
        const data = await AsyncStorage.getItem("@user");
        if (!data) return null;
        return JSON.parse(data);
    };

    async function removeItemValue(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        }
        catch(exception) {
            return false;
        }
    }

    return (
        <ButtonLoginSocial 
            onPress={() => {
                promptAsync({useProxy: true});
            }}>
            <ButtonLoginImage source={imageGoogle} />
        </ButtonLoginSocial>
    );

}