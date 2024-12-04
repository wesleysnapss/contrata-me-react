import { Container, Divisor, DivisorText } from "./styles";

export default function ContainerDivisor({text}) {
    return (
        <Container>
            <Divisor />
            <DivisorText>{text}</DivisorText>
            <Divisor />
        </Container>
    );
}