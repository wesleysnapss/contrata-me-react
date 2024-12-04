import { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Modal, Text, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    styles,
    Container,
    Header,
    HeaderTitle,
    HeaderSubTitle,
    Input,
    Body,
    ContainerInput,
    LinkLabel,
    ButtonLogin,
    ButtonLoginText,
    ContainerResendCode,
    ResendText,
    ContainerCodeInputs,
    ContainerMessage,
    TextMessage,
    TextEmail,
    ImageModal,
    ButtonModal,
    ButtonModalText
} from './styles'

import { theme } from '../../styles/theme';
import { Snackbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfirmEmail() {
    const navigation = useNavigation();
    const [code, setCode] = useState(123456)
    const [email, setEmail] = useState('exemplo@exemplo.com.br')
    const [inputs, setInputs] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: ""
    })
    const [backgroundColorInput, setBackgroundColorInput] = useState({
        input1: theme.colors.text50,
        input2: theme.colors.text50,
        input3: theme.colors.text50,
        input4: theme.colors.text50,
        input5: theme.colors.text50,
        input6: theme.colors.text50
    });

    const [showPassword, setShowPassword] = useState(true);
    const [visible, setVisible] = useState(false);
    const [visibleError, setVisibleError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('O código foi reenviado para seu email!');
    const image = require("../../../assets/images/carousel/confirm-email.png")

    useEffect(() => {
        getUser();
    }, [])

    async function getUser() {
        let user = await AsyncStorage.getItem("tempUser")
        if (user != null) {
            user = JSON.parse(user)
            setEmail(user.email)
        }
    }

    async function resendCode() {
        setErrorMessage("O código foi reenviado para seu email!");
        setVisibleError(true)
    }

    function focusNextInput(value, key) {
        setInputs({ ...inputs, [key]: value })
        if (value.length > 0) {
            switch (key) {
                case 'input1':
                    this.input2.focus();
                    break;
                case 'input2':
                    this.input3.focus();
                    break;
                case 'input3':
                    this.input4.focus();
                    break;
                case 'input4':
                    this.input5.focus();
                    break;
                case 'input5':
                    this.input6.focus();
                    break;
            }
        }
    }

    async function validateCode() {
        let values = Object.values(inputs).join().replaceAll(",", "");
        
        if (values != code) {
            setErrorMessage("O código informado não confere!");
            setVisibleError(true)
        } else {
            setVisible(true)
            setInputs({
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: "",
                input6: ""
            })
        }
    }

    const onDismissSnackBar = () => setVisibleError(false);

    return (
        <>
            {visible ?
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Tudo certo!</Text>
                            <Text style={styles.modalText}>Vamos começar!</Text>
                            <ImageModal 
                                source={image}
                            />
                            <ButtonModal
                                onPress={() => setVisible(!visible)}>
                                <ButtonModalText>Continuar</ButtonModalText>
                            </ButtonModal>
                        </View>
                    </View>
                </Modal>
                :
                <View style={styles.container}>
                    <Container>
                        <TouchableOpacity
                            style={{ marginTop: 8 }}
                            onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                        <Header>
                            <HeaderTitle>Verificação de email</HeaderTitle>
                            <HeaderSubTitle>Sua segurança é muito importante!</HeaderSubTitle>
                        </Header>
                        <ScrollView>
                            <Body>
                                <ContainerMessage>
                                    <TextMessage>Insira o código que enviamos para o e-mail</TextMessage>
                                    <TextEmail>{email}</TextEmail>
                                </ContainerMessage>
                                <ContainerCodeInputs>
                                    <ContainerInput style={{ borderColor: backgroundColorInput?.input1 }}>
                                        <Input
                                            autoFocus={true}
                                            keyboardType="number-pad"
                                            onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, input1: theme.colors.textSuccess })}
                                            onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, input1: theme.colors.text50 })}
                                            autoCapitalize='none'
                                            placeholderTextColor={theme.colors.text50}
                                            maxLength={1}
                                            onChangeText={(input) => focusNextInput(input, 'input1')}
                                            returnKeyType="next"
                                        />
                                    </ContainerInput>

                                    <ContainerInput style={{ borderColor: backgroundColorInput?.input2 }}>
                                        <Input
                                            keyboardType="number-pad"
                                            onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, input2: theme.colors.textSuccess })}
                                            onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, input2: theme.colors.text50 })}
                                            autoCapitalize='none'
                                            placeholderTextColor={theme.colors.text50}
                                            maxLength={1}
                                            onChangeText={(input) => focusNextInput(input, 'input2')}
                                            ref={(input) => { this.input2 = input; }}
                                        />
                                    </ContainerInput>

                                    <ContainerInput style={{ borderColor: backgroundColorInput?.input3 }}>
                                        <Input
                                            keyboardType="number-pad"
                                            onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, input3: theme.colors.textSuccess })}
                                            onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, input3: theme.colors.text50 })}
                                            autoCapitalize='none'
                                            placeholderTextColor={theme.colors.text50}
                                            maxLength={1}
                                            onChangeText={(input) => focusNextInput(input, 'input3')}
                                            returnKeyType="next"
                                            ref={(input) => { this.input3 = input; }}

                                        />
                                    </ContainerInput>

                                    <ContainerInput style={{ borderColor: backgroundColorInput?.input4 }}>
                                        <Input
                                            keyboardType="number-pad"
                                            onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, input4: theme.colors.textSuccess })}
                                            onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, input4: theme.colors.text50 })}
                                            autoCapitalize='none'
                                            placeholderTextColor={theme.colors.text50}
                                            maxLength={1}
                                            onChangeText={(input) => focusNextInput(input, 'input4')}
                                            returnKeyType="next"
                                            ref={(input) => { this.input4 = input; }}
                                        />
                                    </ContainerInput>

                                    <ContainerInput style={{ borderColor: backgroundColorInput?.input5 }}>
                                        <Input
                                            keyboardType="number-pad"
                                            onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, input5: theme.colors.textSuccess })}
                                            onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, input5: theme.colors.text50 })}
                                            autoCapitalize='none'
                                            placeholderTextColor={theme.colors.text50}
                                            maxLength={1}
                                            onChangeText={(input) => focusNextInput(input, 'input5')}
                                            returnKeyType="next"
                                            ref={(input) => { this.input5 = input; }}
                                        />
                                    </ContainerInput>

                                    <ContainerInput style={{ borderColor: backgroundColorInput?.input6 }}>
                                        <Input
                                            keyboardType="number-pad"
                                            onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, input6: theme.colors.textSuccess })}
                                            onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, input6: theme.colors.text50 })}
                                            autoCapitalize='none'
                                            placeholderTextColor={theme.colors.text50}
                                            maxLength={1}
                                            onChangeText={(input6) => setInputs({ ...inputs, input6: input6 })}
                                            returnKeyType="next"
                                            ref={(input) => { this.input6 = input; }}
                                        />
                                    </ContainerInput>
                                </ContainerCodeInputs>

                                <ContainerResendCode>
                                    <ResendText>Não recebeu o código?</ResendText>
                                    <TouchableOpacity onPress={() => resendCode()}>
                                        <LinkLabel>Reenviar</LinkLabel>
                                    </TouchableOpacity>
                                </ContainerResendCode>

                                <ButtonLogin onPress={() => validateCode()} style={Platform.OS == 'android' ? styles.shadow : ''}>
                                    <ButtonLoginText>
                                        Verificar
                                    </ButtonLoginText>
                                </ButtonLogin>
                            </Body>
                        </ScrollView>

                        <View style={styles.label_error}>
                            <Snackbar
                                visible={visibleError}
                                onDismiss={onDismissSnackBar}
                                action={{
                                    label: 'Ok',
                                    onPress: () => { },
                                }}>
                                {errorMessage}
                            </Snackbar>
                        </View>
                    </Container>
                </View>
            }
        </>

    )
}