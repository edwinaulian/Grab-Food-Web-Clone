import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LogoPrefMerchant from '../common/asset/icon-preferred-merchant.svg'; 
import LogoStart from '../common/asset/icon-star.svg';
import LogoPromo from '../common/asset/icon-promo-tag.svg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Menu } from './Menu';
import './content.css';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


export const Content = () => {

    const jamBuka = 'Hari ini  Closed';
    
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="#" onClick={handleClick}>
            <a className='color-link'>Home</a>
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="#"
          onClick={handleClick}
        >
          <a className='color-link'>Restoran</a>
        </Link>,
        <Typography key="3" color="text.primary">
          Do Yan Seafood - Sumbersekar
        </Typography>,
      ];

  return (
    <div className='main-box'>
        <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
        <div className='preferredMerchant'>
            <img src={LogoPrefMerchant} alt='no-img'/> <a className='preferred-title'>Restoran Pilihan</a>
            <h1 className='main-title'>Do Yan Seafood - Sumbersekar</h1>
            <h3 className='cuisine'>Hidangan Laut,Cemilan</h3>
            <img src={LogoStart}/><p className='rating'>4.5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 554,3 km</p>
            <p className='label-open'>Jam Buka</p><p className='open-store'>{jamBuka}</p><p className='close-style'>Tutup</p>
            <img src={LogoPromo}/><p className='title-promo'>HEMAT80G 80rb | HEMAT30G 30%</p><p className='detail-promo'>Lihat Detail</p>
            <InfoOutlinedIcon fontSize='medium'></InfoOutlinedIcon> <p className='info-promo'>Biaya pemesanan senilai Rp3.000 berlaku di restoran ini.</p>
        </div>
        <div className='menu'>
            <Menu></Menu>
        </div>
    </div>
  )
}
