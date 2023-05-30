import { Container, Grid } from '@mui/material';
import React from 'react';
import './Work.css';
import img1 from '../WorkSection/ub.jpg';
import img2 from '../WorkSection/pics/2.png';
import img3 from '../WorkSection/pics/3.png';
import img4 from '../WorkSection/pics/1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TaggedContentCard } from 'react-ui-cards';

const Works = () => {
  AOS.init()
  return (
    <div data-aos="fade-up">
      <Container className='work_head' sx={{color: '#bcbcbc'}}>
        <div className='underline'>
          <h1 className='text'>WORKS</h1>
        </div>
      </Container>
      <Container>
        <Grid container rowSpacing={6} columnSpacing={8} justifyContent="center">
          <Grid item>
            <TaggedContentCard
                href='https://ai-generated-photogallery-warisamir.vercel.app/'
                thumbnail={img1}
                title='AI post generator and community share'
                tags={[
                    'Vitejs',
                    'openAi',
                ]}
            />
          </Grid>
          <Grid item>
            <TaggedContentCard
                href='https://discord-ak-clone.netlify.app/dashboard'
                target="_blank"
                thumbnail={img2}
                title='Discord Clone'
                tags={[
                    'Reactjs',
                    'MERN Stack',
                    'socketIO'
                ]}
            />
          </Grid>
          <Grid item>
            <TaggedContentCard
                href='https://github.com/warisamir/FoodApp'
                thumbnail={img3}
                title='Find Your Meal'
                tags={[
                    'Mern Stack',
                    'NODEMAILER',
                    'STRIPE GATEWAY'
                ]}
            />
          </Grid>
          <Grid item>
            <TaggedContentCard
                href='https://youtube-project-eight.vercel.app/'
                thumbnail={img4}
                title='SpotifyRed'
                tags={[
                    'Reactjs',
                    'Material UI',
                    'youtube API',
                ]}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Works