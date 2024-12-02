import React from 'react'
import HomePageComponent from './components/homepage/homepage'
import dynamic from 'next/dynamic';
const ClientOnlyComponent = dynamic(() => import('./useClientSide'), { ssr: false });


export default function HomePage() {
  return (
    <>
      <HomePageComponent />
    </>
  );
}