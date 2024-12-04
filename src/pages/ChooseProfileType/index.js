import { Platform, View } from "react-native"
import { ButtonClinic, ButtonClinicText, ButtonProfessional, ButtonProfessionalText, ButtonProfile, ButtonProfileProfessional, Container, ContainerButtons, ImageChooseProfile, TextChooseProfile, styles } from "./styles"
import { useNavigation } from "@react-navigation/native";

export default function ChooseProfileType(){
    const navigation = useNavigation();
    const image = require("../../../assets/images/carousel/choose-profile-type.png")

    function goToRegisterPage(){
        navigation.navigate("Register")
    }

    return (
        <View style={styles.container}>
            <Container>
                <ImageChooseProfile source={image} />
                <TextChooseProfile>
                    O primeiro passo é entender o seu perfil, para direcionar você corretamente. Por isso, gostaríamos de saber se você é uma empresa a procura de um profissional ou um profissional a procura de uma oportunidade.
                </TextChooseProfile>

                <ContainerButtons>
                    <ButtonProfessional onPress={() => goToRegisterPage()} style={Platform.OS == 'android' ? styles.shadow : ''}>
                        <ButtonProfessionalText>
                            Sou um profissional a procura de uma clínica
                        </ButtonProfessionalText>
                    </ButtonProfessional>

                    <ButtonClinic onPress={() => goToRegisterPage()} style={Platform.OS == 'android' ? styles.shadow : ''}>
                        <ButtonClinicText>
                            Sou uma clínica a procura de um profissional
                        </ButtonClinicText>
                    </ButtonClinic>
                </ContainerButtons>
            </Container>
        </View>
    )
}