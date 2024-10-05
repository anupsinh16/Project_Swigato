import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './App.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const images = [
  {
    url: '/images/pizza.jpg',
    title: <a href='/foods' style={{color:"white"}}>Pizza</a>,
    width: '33%',
    
  },
  {
    url: '/images/burger.jpg',
    title: <a href='/foods' style={{color:"white"}}>Burger</a>,
    width: '33%',
  },
  {
    url: '/images/indcuisine.jpg',
    title: <a href='/foods' style={{color:"white"}}>Indian Cuisine</a>,
    width: '34%',
  },
  // {
  //   url: '/images/indcuisine.jpg',
  //   title: 'Indian Cuisine',
  //   width: '32%',
  // },
  // {
  //   url: '/images/indcuisine.jpg',
  //   title: 'Indian Cuisine',
  //   width: '32%',
  // },
  // {
  //   url: '/images/indcuisine.jpg',
  //   title: 'Indian Cuisine',
  //   width: '32%',
  // },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor'
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <>
    <div className='background' id='intro'>
        
       
            <div className='inbg'>
              <br/> <br/> <br/> 
            <img src='/images\SWIGATO.png ' style={{width:"50%",maxWidth:"500px", objectFit:"contain"}}></img>
                <h3>Just Order 
                    and Chill !!!</h3>
                    <br/> <br/> <br/> 
               
                

                {/* <button type="button" class="btn btn-warning" style={{margin:"2% ", color:"red"}}> <b>ORDER NOW</b></button> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                 <Stack spacing={2} direction="row" id="ordbut">
                 <Button variant="contained" href="/foods" color="success">ORDER NOW</Button>
      
                </Stack>
                </div>
                
                
           
            

        </div>
        
    </div>


    
    
    
    
    
    <div id="cusbut">
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            // margin : "0.1%",
            // marginLeft : "1%",
            // marginTop : "1%"
            

          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </div>
    
   

<br/>

    <div>
      <h1 style={{color:"red"}}> Why Swigato ...</h1>
      <br></br>
      <div id = "feat">
        <div className='featit'><h4>Fast and Safe Delivery</h4 >
        <img src='/images/fast deli.jpg' style={{maxWidth:"80%",maxHeight:"90%"}} className='featitimg'/>
        </div>
        <div className='featit'><h4>Free Delivery</h4>
        <img src='/images/freedelv.png' style={{maxWidth:"100%",maxHeight:"100%"}} className='featitimg'/></div>
        <div className='featit'><h4>100% Food Quality Assurance</h4>
        <img src='/images/safefood.jpg' style={{maxWidth:"80%",maxHeight:"90%"}} className='featitimg'/></div>
        

      </div>
      <br></br>

      

      

    </div>,
    
    
    
    
    

    </>

    
  );
}