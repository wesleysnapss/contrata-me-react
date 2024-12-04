import { StyleSheet, View, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#707070",
        
      },
      modalView: {
        height: 470,
        width: 330,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalTitle: {
        fontFamily: theme.fonts.rotobo700Bold,
        fontSize: 18,
        lineHeight: 20,
        textAlign: 'center',
        marginBottom: 8
      },
      modalText: {
        fontFamily: theme.fonts.roboto400Regular,
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    }
});

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const Header = styled.View`
    margin-top: 4px;
    margin-right: 68px;
    margin-left: 68px;

`

export const HeaderTitle = styled.Text`
    font-family: ${theme.fonts.rotobo700Bold};
    text-align: center;
    font-size: 18px;
`

export const HeaderSubTitle = styled.Text`
    font-family: ${theme.fonts.roboto400Regular};
    text-align: center;
    font-size: 16px;
    margin-top: 12px;
    line-height: 18.75px;
`

export const Body = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    margin-right: 12px;
    text-align: center;
`

export const ContainerMessage = styled.View`
    display: flex;
    justify-content: center;
    margin-top: 24px;
`

export const TextMessage = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.roboto400Regular};
    font-size: 14px;
    color: ${theme.colors.text};
    text-align: center;
`
export const TextEmail = styled.Text`
    font-family: ${theme.fonts.roboto400Regular};
    font-size: 14px;
    color: ${theme.colors.success};
    text-align: center;
`
export const ContainerCodeInputs = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
`

export const ContainerInput = styled.View`
    height: 40px;
    border: 1px #818188 solid;
    width: 40px;
    border-radius: 4px;
    padding: 8px;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ResendText = styled.Text`
    font-family: ${theme.fonts.roboto400Regular};
    margin-bottom: 8px;
    font-size: 14px;
    color: ${theme.colors.text};
`

export const Input = styled.TextInput`
    width: 88%;
    height: 40px;
    text-align: center;
    font-family: ${theme.fonts.roboto500Medium};
    color: ${theme.colors.secondary};
    font-size: 20px;
`
export const ContainerResendCode = styled.View`
    width: 98%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-left: 12px;
    margin-right: 12px;
`

export const LinkLabel = styled.Text`
    font-size: 14px;
    line-height: 14px;
    font-family: ${theme.fonts.roboto400Regular};
    color: ${theme.colors.success};
    text-decoration: underline ${theme.colors.success};
`

export const ButtonLogin = styled.TouchableOpacity`
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: ${theme.colors.secondary};
    margin-top: 24px;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ButtonLoginText = styled.Text`
    color: #FFF;
    font-family: ${theme.fonts.roboto500Medium};
    height: 16px;
    line-height: 16px;
    text-align: center;
`
export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #707070
`

export const ImageModal = styled.Image`
    width: 260px;
    height: 250px;
`

export const ButtonModal = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: ${theme.colors.secondary};
    margin-top: 36px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ButtonModalText = styled.Text`
    color: #FFF;
    font-family: ${theme.fonts.roboto500Medium};
    height: 16px;
    line-height: 16px;
    text-align: center;
`

