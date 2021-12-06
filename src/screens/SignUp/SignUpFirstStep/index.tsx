import React from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Spacer } from '../../../components/Spacer'

import useHooks from '../../../Hooks'
import * as S from '../SignUpFirstStep/styles'

export function SignUpFirstStep() {
  const { navigation } = useHooks()

  function handleBack() {
    navigation.goBack()
  }

  function handleNextStep() {
    navigation.navigate('SignUpSecondStep')
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton onPress={handleBack} />
            <S.Steps>
              <Bullet active={false} />
              <Bullet active />
            </S.Steps>
          </S.Header>

          <S.Title>Crie sua{'\n'}conta</S.Title>

          <S.SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </S.SubTitle>

          <S.Form>
            <S.FormTitle>1. Dados</S.FormTitle>

            <Input iconName="user" placeholder="Nome" />
            <Spacer />
            <Input iconName="mail" placeholder="email" keyboardType="email-address" />
            <Spacer />
            <Input iconName="credit-card" placeholder="CNH" keyboardType="numeric" />
          </S.Form>

          <Button title="Próximo" onPress={handleNextStep} />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
