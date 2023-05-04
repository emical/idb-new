import React, {useState, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import {useRouter} from 'next/router'
import {recentDreams} from 'data/menu'

const DreamsHeader = (props: {search: any; setSearch: any; onChange: any; searchPlaceholder: any}) => {
  const {searchPlaceholder} = props
  const [searchText, setsearchText] = useState(searchPlaceholder)
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])

  const searchPosts = () => {
    window.location.href = baseURL + '/search/' + searchText + '?pnum=1'
  }
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      searchPosts()
    }
  }

  function generateUniqueRandomNumbers(length: number): number[] {
    const generatedNumbers: number[] = []
    let randomNumber
    do {
      randomNumber = Math.floor(Math.random() * 70) + 1
      if (!generatedNumbers.includes(randomNumber)) {
        generatedNumbers.push(randomNumber)
      }
    } while (generatedNumbers.length < length)
    return generatedNumbers
  }
  const generatedNumbers = generateUniqueRandomNumbers(10)

  return (
    <header>
      {/* <div className="title"></div> */}
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(event) => setsearchText(event.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={searchText ? searchText : 'Search your dream. for eg: snake, ocean etc'}
          />
        </div>

        <div className="sort">
          <Button className="" variant="outlined" onClick={searchPosts} endIcon={<SearchIcon />}>
            Search
          </Button>
        </div>
      </div>

      <div className="links">
        {' '}
        <span className="search-recent-dreams">Recently Searched Dreams: {'  '}</span>
        {generatedNumbers.map((index) => (
          <>
            <a href={baseURL + '/meaning-of-dream/' + recentDreams[index].id + '/'}>
              {recentDreams[index].submenuName}
            </a>
            {', '}
          </>
        ))}
      </div>
    </header>
  )
}

export default DreamsHeader
