import React from 'react'
import { useWindowDimensions } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { ConfirmButton } from '../../components/ConfirmButton'

import * as S from './styles'

export function SchedulingComplete() {
  const { width } = useWindowDimensions()
  return (
    <S.Container>
      <LogoSvg width={width} />

      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>Carro alugado!</S.Title>

        <S.Message>
          Agora você só precisa ir {'\n'}até a concessionária da RENTX{'\n'}pegar o seu automóvel
        </S.Message>

        <S.Footer>
          <ConfirmButton title="OK" />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
}
