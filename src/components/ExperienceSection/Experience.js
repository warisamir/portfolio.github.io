import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { TaggedContentCard } from 'react-ui-cards'
import asiana from './asia.jpg'
import './Exp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  AOS.init()
  return (
    <div data-aos="fade-up">
      <Paper sx={{backgroundColor: '#bcbcbc'}}>
        <Container className='exp_head'>
          <div className='underline'>
            <h1 className='text'>EXPERIENCE</h1>
          </div>
        </Container>
        <Container>
          <Grid container justifyContent='center'>
            <Grid item mb={6}>
                <TaggedContentCard
                    href='https://www.mdunix.com/'
                    thumbnail={asiana}
                    title='Product Developer (Intern)'
                    description="feb 14, 2023"
                    tags={[
                        'frontend',
                        'Content',
                        'React Based'
                    ]}
                />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}

export default Experience