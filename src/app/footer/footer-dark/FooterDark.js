import React from 'react';
import './footerDark.css'
import  Grid  from '@mui/material/Grid';
import LogoAppStore from '../../common/asset/logo-appstore.svg';
import LogoPlayStore from '../../common/asset/logo-playstore.svg';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export const FooterDark = () => {

  const listGrabFoodContry = [
      { name: 'Indonesia', link:'https://food.grab.com/id/en/' },
      { name: 'Filipina', link:'https://food.grab.com/ph/en/' },
      { name: 'Thailand', link:'https://food.grab.com/th/en/' },
      { name: 'Vietnam', link:'https://food.grab.com/vn/en/' },
      { name: 'Singapura', link:'https://food.grab.com/sg/en/' },
      { name: 'Malaysia', link:'https://food.grab.com/my/en/' },
      { name: 'Myanmar', link:'https://food.grab.com/mm/en/' }
  ]

  return (
    <Box sx={{ width: '100%' }}>   
        <div className='footerDark'>
            <Grid item p={2}>   
                <Grid item xs={3} md={3}>
                    <div className='mainfooter'>
                        <h3>GrabFood tersedia di</h3>
                        <div className='countriesList'>
                            {listGrabFoodContry.map((value, i) => {
                                return (
                                    <a className='listColor' key={i} href={value.link} target='_blank' rel="noreferrer">{value.name} <span className='countriesList'></span></a> 
                                )
                            })}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} md={3}>
                    <div className='mainfooter-two'>
                        <p className='tittle-footer'>© Grab 2022</p>
                        <div className='float-left'>
                            <a className='listColor' href='https://www.grab.com/id/terms/' target='_blank' rel='noreferrer noopener'>Ketentuan Layanan</a>
                            <span> •</span>
                            <a  className='listColor' href='https://www.grab.com/id/privacy/' target='_blank' rel='noreferrer noopener'>Kebijakan Privasi</a>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid item p={1}>
                <Grid container spacing={8} columns={0}>
                    <div className='mainFooter-three'>
                        <a className='listColor' href='https://www.facebook.com/grabid' rel="noreferrer noopener" target='_blank'><FacebookIcon fontSize="large"></FacebookIcon></a>
                        <a className='listColor' href='https://www.instagram.com/grabfoodid' rel="noreferrer noopener" target='_blank'><InstagramIcon fontSize="large"></InstagramIcon></a>
                        <a className='listColor' href='https://twitter.com/grabid' rel="noreferrer noopener" target='_blank'><TwitterIcon fontSize="large"></TwitterIcon></a>
                    </div>
                </Grid>
                <Grid container spacing={0} columns={100}>
                   <div className='mainFooter-four'>
                        <a href='https://apps.apple.com/app/id647268330?af_prt=food.grab.com&c=direct&is_retargeting=true&l=id&pid=other_websites' rel="noreferrer noopener" target='_blank'><img className='imgstore' src={LogoAppStore} alt='apps-store'/></a>
                        <a href='https://grab.onelink.me/2695613898?pid=other_websites&c=direct&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-ID-restaurant-detail-6-C2XDGABBT3BYGT-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.grabtaxi.passenger%26hl%3Did_ID' rel="noreferrer noopener" target='_blank'><img className='imgstore' src={LogoPlayStore} alt='play-store'/></a>
                   </div>
                </Grid>
            </Grid>
            </div>
        </Box>
  )
}
