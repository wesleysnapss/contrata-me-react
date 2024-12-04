import { View, Text } from "react-native";
import styled from "styled-components/native";

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.Text`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.View`
  padding: 4em;
  background: papayawhip;
`;
