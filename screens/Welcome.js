import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

// formik
import { Formik } from 'formik'

import { InnerContainer, PageTitle, SubTitle, StyledFormArea, StyledButton, ButtonText, Line, WelcomeContainer, WelcomeImage, Avatar } from '../components/styles'

const Welcome = () => {

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode='cover' source={require('./../assets/img/expo-bg2.png')} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>Nichols Simpson</SubTitle>
          <SubTitle welcome={true}>nichols@simpson.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  )
}

export default Welcome
