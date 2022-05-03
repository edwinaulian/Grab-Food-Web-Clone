import React, {useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid  from '@mui/material/Grid';
import IMGWaiki from '../common/asset/waiki.jpeg';
import IMGAigo from '../common/asset/aigo.jpeg';
import IMGChingu from '../common/asset/chingu.jpeg';
import IMGikanKerapu from '../common/asset/ikanKerapu.jpeg';
import IMGsamjang from '../common/asset/samjang.jpeg';
import IMGOmo from '../common/asset/omo.jpeg';
import IMGsarangheyo from '../common/asset/sarangheyo.jpeg';
import IMGChaeso from '../common/asset/chaeso.jpeg';
import IMGDrink from '../common/asset/drink.jpeg';
import IMGAdon from '../common/asset/adon.jpeg';
import IMGSeaMonster from '../common/asset/seamonster.jpeg';
import Paper from '@mui/material/Paper';
import './menu.css';
import $ from 'jquery';


export const Menu = () => {
    const [value, setValue] = React.useState(0);
    const listTitle = [
       { name:'Chicken Pop Barbeque & Veggie - Rice Box'},
       { name:'Chicken Pop Teriyaki & Veggie - Rice Box'},
       { name:'Chicken Pop Salted Egg & Veggie - Rice Box'},
       { name:'Chicken Pop Black Peper & Veggie - Rice Box'}
    ]

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
      var stickyHeaderTop = $('#section-menu').offset().top;
      $(window).scroll(function(){
              if( $(window).scrollTop() > stickyHeaderTop ) {
                      $('#section-menu').css({position: 'fixed', top: '70px'});
                      $('#sticky').css('display', 'block');
              } else {
                      $('#section-menu').css({position: 'static', top: '0px'});
                      $('#sticky').css('display', 'none');
              }
      });
    });

  return (
    <div>
        <div id='section-menu'>
        <Box sx={{ maxWidth: { xs: 320, sm: 1200 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="scrollable auto tabs example">
                <Tab label="WAIKI Rice Box" />
                <Tab label="Aigo" />
                <Tab label="Chingu" />
                <Tab label="Seerameon Ikan" />
                <Tab label="Samjang Gami (Extra Pedas)" />
                <Tab label="Omo" />
                <Tab label="Saranghaeyo" />
                <Tab label="Chaeso" />
                <Tab label="Drink (Ice / Hot)" />
                <Tab label="Addon" />
                <Tab label="Sea Monster" />
            </Tabs>
        </Box>
        </div>

        <div id="sticky"></div>

        <div className='main-content'>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <TabPanel value={value} index={0}>
                WAIKI Rice Box
              <div>
              {listTitle.map((value, i) => {
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i} > 
                          <img className='imgs' src={IMGWaiki} alt='no-image'/>
                          <p className='title'>{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div>  
              </TabPanel>
              </Grid>

              <Grid item xs={6}>
              <TabPanel value={value} index={0}>
              <div>
              {listTitle.map((value, i) => {
                  return (
                    <Paper sx={{  
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGWaiki} alt='no-image'/>
                          <p className='title'>{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div>  
              </TabPanel>
              </Grid>
            </Grid>

            <TabPanel value={value} index={1}>
                Aigo
                <div>
              {listTitle.map((value, i) => {
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGAigo} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>

            <TabPanel value={value} index={2}>
              Chingu
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGChingu} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={3}>Seerameon Ikan
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGikanKerapu} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={4}>Samjang Gami (Extra Pedas)
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i} > 
                          <img className='imgs' src={IMGsamjang} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            
            <TabPanel value={value} index={5}>Omo
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGOmo} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={6}>Saranghaeyo
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGsarangheyo} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={7}>Chaeso
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGChaeso} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={8}>Drink (Ice / Hot)
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i}> 
                          <img className='imgs' src={IMGDrink} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={9}>Addon
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} key={i} > 
                          <img className='imgs' src={IMGAdon} alt='no-image'/>
                          <p className='title' >{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <TabPanel value={value} index={10}>Sea Monster
            <div>
              {listTitle.map((value, i) => {  
                  return (
                    <Paper sx={{
                      m: 1,
                      width: 380,
                      height: 140,
                    }}>
                      <Box sx={{ width: 100}} > 
                          <img className='imgs' src={IMGSeaMonster} alt='no-image'/>
                          <p className='title' key={i}>{value.name}</p>   
                      </Box>
                    </Paper>
                )})}
              </div> 
            </TabPanel>
            <p className='messages-content'>Kami selalu berusaha supaya informasi kami tepat dan akurat. <a href='https://help.grab.com/hc/en-id/360000180447-Report-incorrect-restaurant-information' target='_blank' rel="noreferrer noopener">Kasih tahu</a> ya kalau ada yang salah.</p>
        </div>
  </div>  
  )
}


function TabPanel(props) {
  const { children, value, index } = props;
  return(<div>
    {
      value === index && (
        <h1>{children}</h1>
      )
    }
  </div>)
}