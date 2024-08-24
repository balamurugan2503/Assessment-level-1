import React from 'react'

export default function Footer() {
  return (
    <>
 <div className='foot-icon'>
 <button className='icon'>
     <img src='/google.PNG'style={{width:"30px",height:"30px"}}/>
 </button>
 <button className='icon'>
     <img src='/facebook.PNG'style={{width:"30px",height:"30px"}}/>
 </button>
 <button className='icon'>
     <img src='/indeed.PNG'style={{width:"30px",height:"30px"}}/>
 </button>
 <button className='icon'>
     <img src='/twitter.PNG'style={{width:"30px",height:"30px"}}/>
 </button>

</div>
<div  className='footer_bottom'>
<p>Example@email.com </p>
<p>Copyright © 2020 Name. All rights reserved. </p>
</div>
</>
  )
}
