import { css } from "styled-components"

export const ipadMini = (props)=>{
    return css`
        @media (max-width: 768px){
            ${props}
        }
    `;
}
export const NestHub = (props)=>{
    return css`
        @media (max-width: 1024px){
            ${props}
        }
    `;
}
export const mylabt = (props)=>{
    return css`
        @media (max-width: 1200px){
            ${props}
        }
    `;
}


