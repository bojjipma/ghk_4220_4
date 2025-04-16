import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const btn = style({
  borderRadius: '24px',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '12px',
  flexDirection: 'column',
  gap: '24px',
  borderRadius: '2rem',
  backgroundColor: '#fff',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const img = style({
  margin: '1rem auto 4px',
});

const switcher = style({
  width: '100%',
  backgroundColor: '#fff',
  padding: '4px',
  borderRadius: '20px',
  display: 'grid',
  gap: '8px',
  gridTemplateColumns: '1fr 1fr',
});

const switcherBtn = recipe({
  base: {
    padding: '4px 8px',
    borderRadius: '20px',
    textAlign: 'center',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '#EBECF9',
      },
    },
  },
});

const containerBottom = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

export const btmContent = style({
  padding: 0,
});
export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  img,
  switcher,
  switcherBtn,
  btmContent,
  containerBottom,
  btn,
};
