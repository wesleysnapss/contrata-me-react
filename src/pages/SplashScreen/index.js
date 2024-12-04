import { ImageBackground, SafeAreaView } from "react-native";
import { Container, ContainerLogo, Logo } from "./styles";
import LottieView from 'lottie-react-native';
import circleGrow from '../../../assets/animations/circle-grow.json';
import { useEffect, useRef, useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
    const ani = useRef(null);
    const navigation = useNavigation();

    const [showAnimation, setShowAnimation] = useState(true)
    const logo = require("../../../assets/logo.png")

    useEffect(() => {
        ani.current.play();
    }, []);

    function finishAnimation(){
        setShowAnimation(false);
        setTimeout(() => {
            navigation.replace('OnBoarding')
        }, 2000)
    }

    return (
        <Container>
            {showAnimation ?
                <LottieView
                    style={{
                        width: wp(90),
                        height: hp(60),
                        alignSelf: 'center'
                    }}
                    loop={false}
                    resizeMode="cover"
                    source={circleGrow}
                    ref={ani}
                    onAnimationFinish={() => finishAnimation() }
                /> 
                :
                <ContainerLogo>
                    <Logo source={logo} />
                </ContainerLogo>
            } 
        </Container>
    );
}