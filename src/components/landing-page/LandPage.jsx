import React from 'react'
import Body from './Body'
import Header from './Header'
import { Grid, GridItem } from '@chakra-ui/react'



function LandPage() {
  return (
    <div className='landing-page'>
        <Grid templateColumns='repeat(1, 1fr)' templateRows='repeat(2, 1fr)'>
          <GridItem>
            <Header />
          </GridItem>
          <GridItem>  
            <Body/>
          </GridItem>
        </Grid>
    </div>
  )
}

export default LandPage