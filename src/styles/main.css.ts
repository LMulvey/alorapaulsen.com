import { globalStyle, style } from '@vanilla-extract/css';

export const bodyStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100%',
  backgroundColor: '#8BC6EC',
  background:
    'linear-gradient( 110.5deg,  rgba(248,196,249,0.26) 22.8%, rgba(253,122,4,0.05) 64.6% )',
  color: '#333333',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 50px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.06)',
  background: '#FFFFFF',
  borderRadius: '20px',
});

export const footerContainer = style({
  textShadow: '1px 1px 5px rgba(0, 0, 0, 0.35)',
  color: 'white',
  fontWeight: 600,
  fontSize: '1rem',
  position: 'absolute',
  textAlign: 'right',
  paddingRight: '25px',
  paddingBottom: '25px',
  bottom: 0,
  right: 0,
});

globalStyle(`${bodyStyle} > ${titleContainer} > h1`, {
  fontSize: '3rem',
  lineHeight: 1,
  fontWeight: 500,
  textShadow: '0px 0px 20px rgba(0, 0, 0, 0.06)',
  background: 'linear-gradient(43deg, #C850C0 0%, #FFCC70 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
