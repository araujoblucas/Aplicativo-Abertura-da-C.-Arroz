import React from 'react';
import styled from 'styled-components/native';


export const BigButton = styled.TouchableOpacity`
    background-color: #E25822;
    width: 220px;
    height: 65px;
    border-radius: 12px;
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
`;

export const BigButtonText = styled.Text`
        color: #fff;
        font-size: 26px;
        font-family: notoserif;
        font-weight: 100;
        text-align: center;
        text-transform: capitalize; 
`;


export const SmallButton = styled.TouchableOpacity`
    background-color: #E25822;
    width: 32%;
    height: 65px;
    border-radius: 12px;
    align-self: center;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
    margin-top:-20px;
`;

export const SmallButtonText = styled.Text`
        color: #fff;
        font-size: 18px;
        font-family: notoserif;
        font-weight: 100;
        text-align: center;
        text-transform: capitalize; 
`;

export const TitleBox = styled.View`
        width: 100%;
        height: 40px;
        margin-top: 15px;
        margin-bottom: 25px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
`;

export const TitleLines = styled.Text`
        color: rgba(229, 88, 34, 0.9);
        font-size: 32px;
        font-weight: bold;
        font-family: serif;
`;


export const TitleLinesText = styled.Text`
        color: rgba(229, 88, 34, 0.9);
        font-size: 36px;
        font-weight: bold;
        font-family: serif;
`;
