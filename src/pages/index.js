import React from 'react'
import UnderConstruction from '../images/under-construction.gif'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Kentico Developer Community</h1>
    <p>We help developers help each other.</p>
    <p>The site is under construction :-)</p>
    <img src={UnderConstruction} alf="Under construction"/>
    <p> This state is temporary, we promise! your Developer Community Team</p>
    <p><strong>#ICODETHEREFOREIAM</strong></p>
  </Layout>
)

export default IndexPage
