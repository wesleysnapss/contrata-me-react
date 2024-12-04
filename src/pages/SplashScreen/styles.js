import { StyleSheet, View, SafeAreaView, Image } from 'react-native';

import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(15, 178, 209, 1);
`

export const ContainerLogo = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    width: 400px;
    height: 200px;
`
