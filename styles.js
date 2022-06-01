import styled from 'styled-components/native';
export const StyledText = styled.Text.attrs(props => ({
  size: props.size || '20px',
}))`
  font-size: ${props => props.size};
  color: red;
`;

export const MarginView = styled.View.attrs(props => ({
  marginL: props.marginL || '0px',
  marginR: props.marginR || '0px',
  marginT: props.marginT || '0px',
}))`
  margin-left: ${props => props.marginL};
  margin-right: ${props => props.marginR};
  margin-top: ${props => props.marginT};
`;

export const FlexedView = styled.View.attrs(props => ({
  marginL: props.marginL || '0px',
  marginR: props.marginR || '0px',
  marginT: props.marginT || '0px',
  width: props.width || 'auto',
  alignItems: props.alignItems || 'center',
  justifyContent: props.justifyContent || 'space-between',
}))`
  margin-left: ${props => props.marginL};
  margin-right: ${props => props.marginR};
  margin-top:${props => props.marginT}
  width: ${props => props.width}
  display: flex;
  flex-direction: row;
  justify-content:${props => props.justifyContent};
  align-items:${props => props.alignItems};
`;

export const BorderedText = styled.Text.attrs(props => ({
  borderRadius: props.borderRadius || 0,
  backgroundColor: props.backgroundColor || 'transparent',
  width: props.width || 'auto',
  height: props.height || 'auto',
  paddingT: props.paddingT || '0',
}))`
  text-align: center;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};
  padding-top: ${props => props.paddingT};
  color: black;
  font-size: 18px;
`;

export const StyledImage = styled.Image.attrs(props => ({
  width: props.width || '0px',
  height: props.height || '0px',
}))`
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const FontSizeText = styled.Text.attrs(props => ({
  fontSize: props.fontSize || '16px',
  color: props.color || 'black',
}))`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

export const BorderedInput = styled.TextInput`
  border-width: 1px;
`;

export const TextElementOfMenu = styled.Text.attrs(props => ({
  paddingT: props.paddingT || '0px',
}))`
  padding-top:${props => props.paddingT}
  font-size: 18px;
  border-width: 1px;
  height: 60px;
  width: 100px;
  text-align: center;
`;
