import { useEffect, useState } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';
import { ButtonLoginImage, ButtonLoginSocial } from '../SocialFooter/styles';

import { styles } from './styles';

export default function ButtonLoginApple() {
    const imageApple = require("../../../assets/apple-icon.png")
    const [appleAvalible, setAppleAvaliable] = useState(false)

    useEffect(() => {
        const checkAvaliable = async () => {
            const isAvailable = await AppleAuthentication.isAvailableAsync();
            console.log(isAvailable)
            setAppleAvaliable(isAvailable)
        }

        checkAvaliable();
    },[])

    const login = async() => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });

            console.log(credential)

            // let state = await AppleAuthentication.refreshAsync();

            // // signed in
            // console.log(state)

            // await AsyncStorage.setItem("user_apple", JSON.stringify(user));

        } catch (e) {
            console.log(e)
            if (e.code === 'ERR_REQUEST_CANCELED') {
                // handle that the user canceled the sign-in flow
            } else {
                // handle other errors
            }
        }
    } 

    return (
        <ButtonLoginSocial
            onPress={login}>
                <ButtonLoginImage source={imageApple} />
            </ButtonLoginSocial>
    )
}