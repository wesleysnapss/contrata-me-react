import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // flexGrow: 0
    },
    carouselItem: {
        // display: "flex", 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        // flexGrow: 0
        // position: "relative"
    },
    textCarousel: {
        textAlign: "center",
        marginRight: 42,
        marginLeft: 42,
        height: 120
    }
});

export const Head = styled.View`
    margin-top: 16px;
    width: 90%;
`

export const LinkLabel = styled.Text`
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    font-family: ${theme.fonts.roboto400Regular};
    color: ${theme.colors.success};
    text-decoration: underline ${theme.colors.secondary};
`

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ImageCarousel = styled.Image`
    width: 330px;
    height: 330px;
`

export const ContainerText = styled.View`
    margin-right: 42px;
    margin-left: 42px;
    margin-top: 58px;
`

export const TextCarousel = styled.Text`
    font-family: ${theme.fonts.rotobo700Bold};
    font-size: 24px;
    text-align: center;
    line-height: 28px;
`

export const TextHighlight = styled.Text`
    font-family: ${theme.fonts.rotobo700Bold};
    font-size: 24px;
    text-align: center;
    line-height: 28px;
    color: ${theme.colors.secondary};
`

export const ContainerCarousel = styled.View`
    margin-top: 40px;
    flex: 1;
`

export const ContainerPagination = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 90px;
    justify-content: center;
    align-items: center;
    width: ${wp(100)};
`

export const ArrowIcon = styled(Feather)`

`