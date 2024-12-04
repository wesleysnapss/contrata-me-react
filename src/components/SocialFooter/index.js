import { Platform } from "react-native";
import ButtonLoginApple from "../ButtonLoginApple";
import ButtonLoginGoogle from "../ButtonLoginGoogle";
import { ContainerSocialButtons } from "./styles";

export default function SocialFooter(){
    return (
        <ContainerSocialButtons>
            <ButtonLoginGoogle />
            {Platform.OS == 'ios' && <ButtonLoginApple /> }
        </ContainerSocialButtons>
    );
}