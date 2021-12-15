import React from 'react'

const Help = () => {
  return (
    <div className='help-section'>
      <div className='title'>What we can help with</div>
      <div className='items'>
        <div className='item'>
          <div className='image countup-right' countup='01'>
            <img src='/images/head-back.png' />
          </div>
          <div className='content'>
            <div className='content-header'>Hair loss</div>
            <div className='content-title'>Hair loss needn’t be irreversible. We can help!</div>
            <div className='content-intro'>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</div>
          </div>
        </div>
        <div className='item'>
          <div className='content'>
            <div className='content-header'>Erecetile dysfunction</div>
            <div className='content-title'>Erections can be a tricky thing. But no need to feel down!</div>
            <div className='content-intro'>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</div>
          </div>
          <div className='image countup-left' countup='02'>
            <img src='/images/head-front.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
