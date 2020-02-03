import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Index = () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <>
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
        <button onClick={()=>handleClick('en')} >
          English
        </button>
        <button onClick={()=>handleClick('ko')} >
          Korean
        </button>
        <button onClick={()=>handleClick('chi')} >
          Chinese
      </button>
      </nav>
      <div>
        <ul>
          <li><Link to="/countdown">{t('Thanks.1')}</Link></li>
          <li><Link to="/countdown-test2">Countdown 2</Link></li>
          <li><Link to="/countdown-test">Countdown Test</Link></li>
          <li><Link to="/paginate">Pagination</Link></li>
          <li><Link to="/paginate2">Pagination2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Index
