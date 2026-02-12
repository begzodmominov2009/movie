import React from 'react'
import HomeBanner from './components/shared/home/HomeBanner'
import HomeGaner from './components/shared/home/HomeGaner'
import HomeMovies from './components/shared/home/HomeMovies'
import HomeSerials from './components/shared/home/HomeSerials'
import HomeExtiraMovies from './components/shared/home/HomeExtiraMovies'
import HomeTopMovies from './components/shared/home/HomeTopMovies'
import HomeActiors from './components/shared/home/HomeActiors'
import HomeCountry from './components/shared/home/HomeCountry'
import Containers from './components/ui/Containers'

const page = () => {
  return (
    <>
      <HomeBanner/>
      <HomeGaner/>
      <HomeMovies/>
      <HomeSerials/>
      <HomeExtiraMovies/>
      <HomeTopMovies/>
      <HomeActiors/>
      <Containers className=''>
        description
      </Containers>
      <HomeCountry/>
    </>
  )
}

export default page
