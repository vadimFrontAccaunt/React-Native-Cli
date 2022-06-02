import styled from 'styled-components/native';
export const StyledText = styled.Text.attrs(props => ({
  size: props.size || '20px',
}))`
  font-size: ${props => props.size};
  color: red;
`;

export const HeightWidthView = styled.View.attrs(props => ({
  height: props.height || 'auto',
  width: props.width || 'auto',
}))`
  height: ${props => props.height};
  width: ${props => props.width};
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
  BG: props.bg || 'transapent',
}))`
  margin-left: ${props => props.marginL};
  margin-right: ${props => props.marginR};
  margin-top:${props => props.marginT}
  width: ${props => props.width}
  display: flex;
  flex-direction: row;
  justify-content:${props => props.justifyContent};
  align-items:${props => props.alignItems};
  flex-wrap:wrap;
  background-color:${props => props.bg}
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
  marginT: props.marginT || '0px',
}))`
  padding-top: ${props => props.paddingT};
  margin-top: ${props => props.marginT};
  font-size: 18px;
  border-width: 1px;
  height: 60px;
  width: 100px;
  text-align: center;
`;

export const PreView = styled.View`
  width: 100%;
  height: 114px;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const AbsoluteTouchableOpacity = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  background-color: #f2f2fc;
  border-radius: 50px;
  position: absolute;
  right: 104px;
  bottom: 40px;
`;

export const StyledPressable = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
