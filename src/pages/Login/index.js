import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
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
    ContainerRecordPassword,
    CheckBoxInput,
    CheckBoxLabel,
    CheckBoxContainer,
    LinkLabel,
    ButtonLogin,
    ButtonLoginText,
    Footer,
    ContainerCreateAccount,
    CreateAccountText,
    HeaderTextInput,
    ContainerStrongPassword,
    StrongPasswordRule
} from './styles'
import { theme } from '../../styles/theme';

import { IconButton, Snackbar } from 'react-native-paper';
import SocialFooter from '../../components/SocialFooter';
import ContainerDivisor from '../../components/ContainerDivisor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function Login() {
    const navigation = useNavigation();
    const [tempUser, setTempUser] = useState();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [backgroundColorInput, setBackgroundColorInput] = useState({
        email: theme.colors.text50,
        password: theme.colors.text50
    });
    const [showPassword, setShowPassword] = useState(true);
    const [checked, setChecked] = useState(false);
    const [visibleError, setVisibleError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Email ou senha inválidos!');
    const [validEmail, setValidEmail] = useState(true);

    function clearValues(){
        setForm({
            email: '',
            password: ''
        })
    }

    function navigate(){
        clearValues();
        navigation.navigate('Register')
    }

    async function getUser() {
        let user = await AsyncStorage.getItem("tempUser")
        if (user != null) {
            user = JSON.parse(user)
            setTempUser(user.email)
        }
    }

    async function validateLogin() {
        let message = "";
        let hasErrors = true;

        let tempUser = await AsyncStorage.getItem('tempUser');
        if (tempUser != null) {
            tempUser = JSON.parse(tempUser)

            if (tempUser.methodLogin == 'api') {
                if (tempUser.email == form.email && tempUser.password == form.password) {
                    hasErrors = false;
                }
            }

        }

        if (hasErrors == true) {
            setVisibleError(true)
        } else {
            navigation.navigate('ConfirmEmail')
        }
    }

    function validateEmail() {
        if(form.email.length == 0) {
            setBackgroundColorInput({ ...backgroundColorInput, email: theme.colors.text50 })
            return true;
        } 

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(form.email);
        let colorBackgroundEmail = (valid == true) ? theme.colors.text50 : theme.colors.danger;
        setValidEmail(valid);
        setBackgroundColorInput({ ...backgroundColorInput, email: colorBackgroundEmail })
        return valid;
    }

    const onDismissSnackBar = () => setVisibleError(false);

    return (
        <View style={styles.container}>
            <Container>
                <Header>
                    <HeaderTitle>Login</HeaderTitle>
                    <HeaderSubTitle>Que bom que você está aqui! Sentimos sua falta!</HeaderSubTitle>
                </Header>
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} behavior="padding" enabled keyboardVerticalOffset={60}>
                <ScrollView>
                    <Body>
                        <ContainerInput style={{ borderColor: backgroundColorInput?.email }}>
                            {
                                (form.email.length > 0 || backgroundColorInput?.email == theme.colors.secondary)
                                &&
                                <HeaderTextInput>E-mail</HeaderTextInput>
                            }
                            <Input
                                placeholder={(form.email.length > 0 || backgroundColorInput?.email == theme.colors.secondary) ? "" : "E-mail"}
                                keyboardType="email-address"
                                onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, email: theme.colors.secondary })}
                                onBlur={() => validateEmail()}
                                autoCapitalize='none'
                                placeholderTextColor={theme.colors.text}
                                onChangeText={(email) => setForm({ ...form, email: email })}
                           />
                        </ContainerInput>
                        {(validEmail == false && form.email.length > 0) &&
                            <ContainerStrongPassword>
                                <StrongPasswordRule style={styles.invalid_email}>* Formato de e-mail inválido</StrongPasswordRule>
                            </ContainerStrongPassword>
                        }

                        <ContainerInput style={{ borderColor: backgroundColorInput?.password }}>
                            {
                                (form.password.length > 0 || backgroundColorInput?.password == theme.colors.secondary)
                                &&
                                <HeaderTextInput>Senha</HeaderTextInput>
                            }
                            <Input
                                onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, password: theme.colors.secondary })}
                                onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, password: theme.colors.text50 })}
                                placeholder={(form.password.length > 0 || backgroundColorInput?.password == theme.colors.secondary) ? "" : "Senha"}
                                keyboardType="default"
                                autoCapitalize='none'
                                caretHidden={false}
                                secureTextEntry={showPassword}
                                placeholderTextColor={theme.colors.text}
                                onChangeText={(password) => setForm({ ...form, password: password })}
                            />
                            <View>
                                <IconButton
                                    icon={showPassword ? "eye-off" : "eye"}
                                    size={20}
                                    iconColor={showPassword ? theme.colors.text50 : theme.colors.text}
                                    containerColor={theme.colors.textDisable}
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            </View>
                        </ContainerInput>
                        

                        <ContainerRecordPassword>
                            <CheckBoxContainer>
                                <CheckBoxInput
                                    onCheckColor={"#FFF"}
                                    onTintColor={theme.colors.secondary}
                                    onFillColor={theme.colors.secondary}
                                    tintColors={{ true: theme.colors.secondary }}
                                    boxType='square'
                                    disabled={false}
                                    value={checked}
                                    onValueChange={() => setChecked(!checked)}
                                    style={{ transform: [{ scale: 0.70 }] }}
                                />
                                <CheckBoxLabel>Lembrar minha senha</CheckBoxLabel>
                            </CheckBoxContainer>
                            <TouchableOpacity>
                                <LinkLabel>Recuperar senha</LinkLabel>
                            </TouchableOpacity>
                        </ContainerRecordPassword>

                        <ButtonLogin onPress={() => validateLogin()} style={Platform.OS == 'android' ? styles.shadow : ''}>
                            <ButtonLoginText>
                                ENTRAR
                            </ButtonLoginText>
                        </ButtonLogin>
                    </Body>

                    <Footer>
                        <ContainerDivisor text={"Ou faça login com"} />
                        <SocialFooter />

                        <ContainerCreateAccount>
                            <CreateAccountText>Não tem uma conta?</CreateAccountText>
                            <TouchableOpacity onPress={() => { navigate() }}>
                                <LinkLabel>Criar conta</LinkLabel>
                            </TouchableOpacity>
                        </ContainerCreateAccount>
                    </Footer>
                    </ScrollView>       
                </KeyboardAvoidingView>

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
    )
}