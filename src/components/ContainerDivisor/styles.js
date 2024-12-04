import { View, Text } from "react-native"
import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Container = styled.View`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 12px;
    align-items: center;
    margin-bottom: 24px;
    margin-left: 8px;
    margin-right: 8px;
`

export const Divisor = styled.View`
    height: 2px;
    width: 90px;
    background-color: ${theme.colors.text50};
`

export const DivisorText = styled.Text`
    color: ${theme.colors.text50};
    font-family: ${theme.fonts.roboto400Regular};
`