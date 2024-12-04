import { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, KeyboardAvoidingView, Linking, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    ContainerStrongPassword,
    StrongPasswordRule,
    HeaderTextInput
} from './styles'
import { theme } from '../../styles/theme';

import { IconButton, Snackbar } from 'react-native-paper';
import SocialFooter from '../../components/SocialFooter';
import ContainerDivisor from '../../components/ContainerDivisor';
import { AntDesign } from '@expo/vector-icons';

export default function Register() {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        acceptTerms: false,
        methodLogin: 'api'
    });
    const [password, setPassword] = useState('');
    const [backgroundColorInput, setBackgroundColorInput] = useState({
        name: theme.colors.text50,
        email: theme.colors.text50,
        password: theme.colors.text50,
        password2: theme.colors.text50
    });

    const [rulesStrongPasswod, setRulesStrongPasswod] = useState({
        minCharacters: false,
        maxCharacter: false,
        oneLetter: false,
        specialCharacter: false
    });

    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [matchPassword, setMatchPassword] = useState(false);

    const [totalPassCompleted, setTotalPassCompleted] = useState(0);
    const [visibleError, setVisibleError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Alguns erros foram encontrados!');

    function changePassword(text) {
        let totalPassed = 0;
        let ruleMin = false;
        let ruleMax = false;
        let ruleLetter = false;
        let ruleSpecial = false;

        if (text.length >= 6) {
            ruleMin = true;
            totalPassed++;
        }

        if (text.length > 0 && text.length <= 6) {
            ruleMax = true;
            totalPassed++;
        }

        let regexOneLetter = new RegExp('(?=.*[A-Za-z])');
        if (regexOneLetter.test(text)) {
            ruleLetter = true;
            totalPassed++;

        }

        let regexSpecialCharacter = new RegExp('(?=.*[!@#$%.&*])');
        if (regexSpecialCharacter.test(text)) {
            ruleSpecial = true;
            totalPassed++;
        }

        setRulesStrongPasswod({
            minCharacters: ruleMin,
            maxCharacter: ruleMax,
            oneLetter: ruleLetter,
            specialCharacter: ruleSpecial
        })

        setForm({ ...form, password: text })
        setPassword(text)
        setTotalPassCompleted(totalPassed)
    }

    function validateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(form.email);
        let colorBackgroundEmail = (valid == true) ? theme.colors.text50 : theme.colors.danger;
        setValidEmail(valid);
        setBackgroundColorInput({ ...backgroundColorInput, email: colorBackgroundEmail })
        return valid;
    }

    function validateMatchPassword(password) {
        setForm({ ...form, password2: password })

        let valid = true;
        if (form.password != password) {
            valid = false
        }

        console.log(valid)
        setMatchPassword(valid)
    }

    async function validateRegister() {
        let message = "";
        let hasErrors = false;

        if (form.password != form.password2) message = "As senhas devem ser iguais!";
        if (totalPassCompleted < 4) message = "Alguns erros foram encontrados!";
        if (form.acceptTerms == false) message = "É necessário aceitar os termos!";
        if (form.email.length == 0) message = "Email é obrigatório!";
        if (validateEmail() == false) message = "Email inválido!";
        if (form.name.length == 0) message = "Nome é obrigatório!";

        if (message.length > 0) hasErrors = true

        if (hasErrors == true) {
            setErrorMessage(message)
            setVisibleError(true);
        } else {
            console.log(form, form.password, form.password2)

            register();
        }
    }

    async function register() {
        await AsyncStorage.setItem('tempUser', JSON.stringify(form))
        navigation.navigate('ConfirmEmail')
    }

    async function openTerms() {
        let urlTerms = "https://www.apple.com/legal/internet-services/itunes/br/terms.html";
        await Linking.openURL(urlTerms)
    }

    const onDismissSnackBar = () => setVisibleError(false);

    return (
        <View style={styles.container}>
            <Container>
                <TouchableOpacity
                    style={{ padding: 8 }}
                    onPress={() => navigation.replace('Login')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Header>
                    <HeaderTitle>Novo cadastro</HeaderTitle>
                    <HeaderSubTitle>Precisamos te identificar quando você vier!</HeaderSubTitle>
                </Header>
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} behavior="padding" enabled keyboardVerticalOffset={60}>
                    <ScrollView>
                        <Body>
                            <ContainerInput style={{ borderColor: backgroundColorInput?.name }}>
                                {
                                    (form.name.length > 0 || backgroundColorInput?.name == theme.colors.secondary)
                                    &&
                                    <HeaderTextInput>Nome</HeaderTextInput>
                                }
                                <Input
                                    style={{ color: theme.colors.text }}
                                    placeholder={(form.name.length > 0 || backgroundColorInput?.name == theme.colors.secondary) ? "" : "Nome"}
                                    keyboardType="default"
                                    onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, name: theme.colors.secondary })}
                                    onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, name: theme.colors.text50 })}
                                    autoCapitalize='none'
                                    value={form?.name}
                                    onChangeText={(name) => setForm({ ...form, name: name })}
                                    placeholderTextColor={theme.colors.text}
                                    color={theme.colors.text}
                                />
                            </ContainerInput>

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
                                    value={form?.email}
                                    onChangeText={(email) => setForm({ ...form, email: email })}
                                    placeholderTextColor={theme.colors.text}
                                    color={theme.colors.text}
                                    style={{ color: theme.colors.text }}
                                />
                            </ContainerInput>
                            {validEmail == false &&
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
                                    style={{ color: theme.colors.text }}
                                    onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, password: theme.colors.secondary })}
                                    onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, password: theme.colors.text50 })}
                                    placeholder={(form.password.length > 0 || backgroundColorInput?.password == theme.colors.secondary) ? "" : "Senha"}
                                    keyboardType="default"
                                    caretHidden={false}
                                    secureTextEntry={showPassword}
                                    placeholderTextColor={theme.colors.text}
                                    color={theme.colors.text}
                                    onChangeText={(text) => changePassword(text)}
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

                            <ContainerStrongPassword>
                                <StrongPasswordRule style={rulesStrongPasswod.minCharacters == true ? styles.strong_password_rule : ''}>mínimo 06 caracteres</StrongPasswordRule>
                                <StrongPasswordRule style={rulesStrongPasswod.maxCharacter == true ? styles.strong_password_rule : ''}>máximo 06 caracteres</StrongPasswordRule>
                                <StrongPasswordRule style={rulesStrongPasswod.oneLetter == true ? styles.strong_password_rule : ''}>ao menos 01 letra</StrongPasswordRule>
                                <StrongPasswordRule style={rulesStrongPasswod.specialCharacter == true ? styles.strong_password_rule : ''}>ao menos 01 caractere especial (!@#$%.&*)</StrongPasswordRule>
                            </ContainerStrongPassword>

                            <ContainerInput style={{ borderColor: backgroundColorInput?.password2 }}>
                                {
                                    (form.password2.length > 0 || backgroundColorInput?.password2 == theme.colors.secondary)
                                    &&
                                    <HeaderTextInput>Confirmação de senha</HeaderTextInput>
                                }
                                <Input
                                    style={{ color: theme.colors.text }}
                                    onFocus={() => setBackgroundColorInput({ ...backgroundColorInput, password2: theme.colors.secondary })}
                                    onBlur={() => setBackgroundColorInput({ ...backgroundColorInput, password2: theme.colors.text50 })}
                                    placeholder={(form.password2.length > 0 || backgroundColorInput?.password2 == theme.colors.secondary) ? "" : "Confirmação de senha"}
                                    keyboardType="default"
                                    autoCapitalize='none'
                                    caretHidden={false}
                                    secureTextEntry={showPassword2}
                                    value={form?.password2}
                                    onChangeText={(password2) => validateMatchPassword(password2)}
                                    placeholderTextColor={theme.colors.text}
                                    color={theme.colors.text}
                                />
                                <View>
                                    <IconButton
                                        icon={showPassword2 ? "eye-off" : "eye"}
                                        size={20}
                                        iconColor={showPassword2 ? theme.colors.text50 : theme.colors.text}
                                        containerColor={theme.colors.textDisable}
                                        onPress={() => setShowPassword2(!showPassword2)}
                                    />
                                </View>
                            </ContainerInput>
                            <ContainerStrongPassword>
                                <StrongPasswordRule style={
                                    [matchPassword 
                                        ? styles.valid_email 
                                        : form.password2.length == 0 
                                            ? theme.colors.text
                                            : styles.invalid_email
                                    ]}>
                                    {matchPassword == true ? "Senhas conferem" : "Senhas não conferem"}
                                </StrongPasswordRule>
                            </ContainerStrongPassword>

                            <ContainerRecordPassword>
                                <CheckBoxContainer>
                                    <CheckBoxInput
                                        onCheckColor={"#FFF"}
                                        onTintColor={theme.colors.secondary}
                                        onFillColor={theme.colors.secondary}
                                        tintColors={{ true: theme.colors.secondary }}
                                        boxType='square'
                                        disabled={false}
                                        value={form?.acceptTerms}
                                        onValueChange={() => setForm({ ...form, acceptTerms: !form.acceptTerms })}
                                        style={{ transform: [{ scale: 0.70 }] }}
                                    />
                                    <CheckBoxLabel>Li e aceito os</CheckBoxLabel>
                                </CheckBoxContainer>
                                <TouchableOpacity onPress={() => openTerms()}>
                                    <LinkLabel>Termos e condições</LinkLabel>
                                </TouchableOpacity>
                            </ContainerRecordPassword>

                            <ButtonLogin onPress={() => validateRegister()} style={Platform.OS == 'android' ? styles.shadow : ''}>
                                <ButtonLoginText>
                                    Finalizar cadastro
                                </ButtonLoginText>
                            </ButtonLogin>
                        </Body>

                        <Footer>
                            <ContainerDivisor text={"Ou cadastre-se com"} />
                            <SocialFooter />

                            <ContainerCreateAccount>
                                <CreateAccountText>Já tem uma conta?</CreateAccountText>
                                <TouchableOpacity onPress={() => { navigation.replace('Login') }}>
                                    <LinkLabel>Faça login</LinkLabel>
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