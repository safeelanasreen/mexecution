import React from 'react'
import ThankyouPage from '../src/components/ThankyouPage'
import { getPageContent } from '../lib/pages';

const ThankYou = (props) => {
  return (
    // "thankyou"
    <ThankyouPage props={props} />

 
  )
}

export async function getServerSideProps() {
    try {
  
      const layout = await getPageContent(`header`);
      const footer = await getPageContent(`footer`);
  
      const pageData = { menu: layout, footer };
  
      return {
        props: {
          data: pageData,
        },
        // revalidate: 300,
      };
    } catch (error) {
      return {
        props: {
          apiError: true,
        },
      };
    }
  }
  
export default ThankYou
