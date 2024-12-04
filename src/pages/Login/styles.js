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
        padding: 8,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    invalid_email: { color: theme.colors.danger },
});

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 8px;

`

export const Header = styled.View`
    margin-right: 68px;
    margin-left: 68px;
    margin-top: 80px;
    margin-bottom: 20px;
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
`
export const ContainerInput = styled.View`
    height: 60px;
    border: 1px #818188 solid;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.TextInput`
    width: 88%;
    height: 40px;
`
export const ContainerRecordPassword = styled.View`
    width: 98%;
    display: flex;
    justify-content: space-between;

    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-left: 12px;
    margin-right: 12px;
    /* vertical-align: middle; */
`
export const CheckBoxContainer = styled.View`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const CheckBoxInput = styled(CheckBox)``

export const CheckBoxLabel = styled.Text`
    margin-left: 8px;
    font-size: 14px;
    line-height: 14px;
    font-family: ${theme.fonts.roboto400Regular};
    color: ${theme.colors.text};
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

export const Footer = styled.View`
    margin-top: 24px;
    background-color: #FFF;
`

export const ContainerCreateAccount = styled.View`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

export const CreateAccountText = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.roboto400Regular};
    color: ${theme.colors.text};
    font-size: 14px;
`

export const HeaderTextInput = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.roboto400Regular};
    text-align: left;
    bottom: 48px;
    left: 12px;
    z-index: 10;
    background-color: white;
    position: absolute;
    font-size: 12px;
    padding: 4px 6px;
`

export const ContainerStrongPassword = styled.View`
    width: 98%;
    align-items: flex-start;
    display: flex;
    margin-top: 8px;
`

export const StrongPasswordRule = styled.Text`
    text-align: left;
    font-size: 10px;
    font-family: ${theme.fonts.roboto400Regular};
`