import React from 'react';
import Logo from '../common/asset/logo-grabfood-mono.svg';
import Grid from '@mui/material/Grid';
import { FooterNew } from './footer-new/FooterNew';
import { FooterDark } from './footer-dark/FooterDark';

export const Footer = () => {
  return (
     <div>
         <FooterNew></FooterNew>
         <FooterDark></FooterDark>
     </div>
  )
}
