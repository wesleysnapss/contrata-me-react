import {View} from 'react-native'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ContainerSocialButtons = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ButtonLoginSocial = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    border: 1px solid ${theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background-color: #FFF;
`

export const ButtonLoginImage = styled.Image`
    width: 20px;
    height: 20px;
`