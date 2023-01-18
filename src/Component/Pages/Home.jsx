import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../Nav';
import '../../Component/main.css';
function Home() {
  return (
    <div className='home-page'>
        <div className='main'>
 <div className='content'>
<h2> Home</h2>
<section>

</section>
<section>
  <h2 className='tag-head'>We Pray, We Praise, We Believe, God Delivers, God Gets The Praises</h2>
  <div className='tag-info'>
  <div className='tags-1'>
    <h2>Bible</h2>
    <p>
    We are a Bible  believing gospel station, the word of God is our sword, faith is our shield, we believe and teach the word of God
    </p>
  </div>
  <div className='tags-2'>
  <FontAwesomeIcon icon="fas fa-pray" />
    <h2>Prayer</h2>
    <p>The Hour of Prayer radio station is a Bible based radio station, founded upon the word of GOD,  Acts 3: 1-8</p>
  </div>
  <div className='tags-3'>
    <h2>Music</h2>
    <p>24 Hours per day seven days per week a blend of endless gospel music, thank you for listening to us,  tell a friend.</p>
  </div>
  </div>
</section>
<section>
  <div className='bonner'>
    <div className='bonner-info'>
<h4> This is the hour of prayer radio</h4>

   <h4>Soaring to new heights

 and deeper depths</h4>


   <h4>Catches a glimpse of glory bright</h4>
</div>
  </div>
</section>
 </div>
 <div className="sidebar">
     <h2>sidebar</h2>
 </div>
 </div>

    </div>
  )
}

export default Home