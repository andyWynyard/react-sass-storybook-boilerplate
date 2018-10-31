import styled from "styled-components"

export default Input = styled.input`
    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    background-color: ${props => props.backgroundColor};
`