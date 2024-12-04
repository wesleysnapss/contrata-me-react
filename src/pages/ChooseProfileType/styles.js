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
    justify-content: center;
    align-items: center;
`

export const ImageChooseProfile = styled.Image`
    width: 250px;
    height: 250px;
`

export const TextChooseProfile = styled.Text`
    font-family: ${theme.fonts.roboto400Regular};
    color: ${theme.colors.text};
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    margin-right: 14px;
    margin-left: 14px;
`

export const ContainerButtons = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 36px;
`

export const ButtonProfessional = styled.TouchableOpacity`
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: ${theme.colors.secondary};
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
`

export const ButtonProfessionalText = styled.Text`
    color: #FFF;
    font-family: ${theme.fonts.roboto500Medium};
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
`

export const ButtonClinic = styled.TouchableOpacity`
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: #FFF;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid ${theme.colors.secondary};
`

export const ButtonClinicText = styled.Text`
    color: ${theme.colors.secondary};
    font-family: ${theme.fonts.roboto500Medium};
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
`