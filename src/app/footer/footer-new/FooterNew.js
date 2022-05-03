import React from 'react';
import Logo from '../../common/asset/logo-grabfood-mono.svg';
import Grid from '@mui/material/Grid';
import './footerNew.css';

export const FooterNew = () => {

  const listSeringDicari = [
      { id: 1, name: 'Burger King Menu' },
      { id: 2, name: 'Chatime Menu' },
      { id: 3, name: 'Dominos Pizza Menu' },
      { id: 4, name: 'Hokben Menu' },
      { id: 5, name: 'JCO Delivery' },
      { id: 6, name: 'KFC Menu' },
      { id: 7, name: 'McDonalds Menu' },
      { id: 8, name: 'Pizza Hut Deliery' },
      { id: 9, name: 'Richeese Menu' },
      { id: 10, name: 'Menu Solaria' },
      { id: 11, name: 'Starbucks Menu' },
      { id: 12, name: 'Yoshinoya Menu' },
  ];

  const listMakananPopuler = [
    { id: 1, name: 'Makanan Cina' },
    { id: 2, name: 'Makanan Cepat Saji' },
    { id: 3, name: 'Makanan India' },
    { id: 4, name: 'Makanan Indonesia' },
    { id: 5, name: 'Makanan Italia' },
    { id: 6, name: 'Makanan Jepang' },
    { id: 7, name: 'Makanan Korea' },
    { id: 8, name: 'Makanan Thailand' },
    { id: 9, name: 'Vietnamese Food' },
  ]

  const listTentangGrab = [
      { id: 1, name: 'Tentang Grab', link:'https://www.grab.com/id/about/' },
      { id: 2, name: 'Tentang GrabFood',  link:'https://www.grab.com/id/food/' },
      { id: 3, name: 'Blog', link:'https://www.grab.com/id/food-blog/' },
  ]

  const listBantuan = [
    { id: 1, name: 'Bantuan', link: 'https://help.grab.com/passenger/en-id/115002258448-GrabFood' },
    { id: 2, name: 'Yang Sering Ditanya', link: 'https://help.grab.com/passenger/en-id/115002258448-GrabFood' },
    { id: 3, name: 'Yuk Jadi Mitra Restoran GrabFood', link:'https://www.grab.com/id/grabfood/' },
    { id: 4, name: 'Yuk Jadi Mitra Pengemudi Grab', link:'https://www.grab.com/id/driver/food/' },
  ]

  return (
      <div className="footerNew">
          <img src={Logo} className='grab-logo-footer' alt="GrabFood Pesan Makanan Online"/>
          <div className='line'></div>   
          <Grid container spacing={4} columns={60}>
                <Grid item xs={15}>
                    <div className='ant-col-24 ant-col-lg-6'>
                        <div className='ant-row-flex'>
                            <div className='footer-header'>Sering Dicari</div>
                        </div>
                        <div className='ant-row-flex footerLinksNewContainer'>
                            {listSeringDicari.map((value, i) => {
                                return (
                                <li className='footerLinksNew'  key={value.id} > 
                                    <a className='listColorNew' href='#' target='_blank' rel='noreferrer noopener'>{value.name}</a>
                                </li>   
                                ) 
                            })}
                        </div>
                </div>
                </Grid>

                <Grid item xs={15}>
                <div className='ant-col-24 ant-col-lg-6'>
                <div className='ant-row-flex'>
                        <div className='footer-header'>Makanan Populer</div>
                    </div>
                    <div className='ant-row-flex footerLinksNewContainer'>
                        {listMakananPopuler.map((value, i) => {
                            return (
                            <li className='footerLinksNew' key={value.id}>
                                <a className='listColorNew'  href='#' target='_blank' rel='noreferrer noopener'>{value.name}</a>
                            </li>   
                            ) 
                        })}
                    </div>
                </div>
                </Grid>

                
                <Grid item xs={15}>
                <div className='ant-col-24 ant-col-lg-6'>
                <div className='ant-row-flex'>
                        <div className='footer-header'>Tentang Grab</div>
                    </div>
                    <div className='ant-row-flex footerLinksNewContainer'>
                        {listTentangGrab.map((value, i) => {
                            return (
                            <li className='footerLinksNew' key={value.id} >
                                <a className='listColorNew' href={value.link} target='_blank' rel='noreferrer noopener'>{value.name}</a>
                            </li>   
                            ) 
                        })}
                    </div>
                </div>
                </Grid>

                <Grid item xs={15}>
                <div className='ant-col-24 ant-col-lg-6'>
                <div className='ant-row-flex'>
                        <div className='footer-header'>Bantuan</div>
                    </div>
                    <div className='ant-row-flex footerLinksNewContainer'>
                        {listBantuan.map((value, i) => {
                            return (
                            <li className='footerLinksNew' key={value.id}>
                                <a className='listColorNew' href={value.link} target='_blank' rel='noreferrer noopener'>{value.name}</a>
                            </li>   
                            ) 
                        })}
                    </div>
                </div>
                </Grid>
          </Grid>  
    </div>
  )
}
