/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'

const Paginate = (props: {
  currentPage: any
  setCurrentPage: any
  totalPosts: any
  postPerPage: any
  fromsearch: any
  searchText: any
  frompopuplar: any
}) => {
  const {currentPage, setCurrentPage, totalPosts, postPerPage, fromsearch, searchText, frompopuplar} = props
  const totalPages = Math.ceil(totalPosts / postPerPage)
  const pages = []
  const startingIndex: number = parseInt(currentPage) - 2 > 0 ? parseInt(currentPage) - 2 : 1
  // const endIndex: number = parseInt(currentPage) + 2 > 0 ? parseInt(currentPage) - 2 : 1
  for (let p = startingIndex; p <= (startingIndex as number) + 5; p++) {
    pages.push(p)
    if (p == totalPages) {
      break
    }
  }
  const router = useRouter()
  const [baseURL, setHost] = useState('')
  useEffect(() => {
    if (!router.isReady) return
    else {
      setHost(window.location.origin)
    }
  }, [router.isReady])
  if (fromsearch) {
    return (
      <ul className="pagination">
        <li className={`page-item ${currentPage == 1 && `disabled`}`}>
          <a className="page-link" href={baseURL + '/search/' + searchText + '?pnum=' + (startingIndex - 1)}>
            &laquo;
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page == currentPage && `active`}`}
            onClick={() => setCurrentPage(page)}
          >
            <a className="page-link" href={baseURL + '/search/' + searchText + '?pnum=' + page}>
              {page}
            </a>
          </li>
        ))}
        <li className={`page-item ${startingIndex + 6 > totalPages && `disabled`}`}>
          <a className="page-link" href={baseURL + '/search/' + searchText + '?pnum=' + (startingIndex + 6)}>
            &raquo;
          </a>
        </li>
      </ul>
    )
  } else if (frompopuplar) {
    return (
      <ul className="pagination">
        <li className={`page-item ${currentPage == 1 && `disabled`}`}>
          <a className="page-link" href={baseURL + '/popular-dreams/' + searchText + '?pnum=' + (startingIndex - 1)}>
            &laquo;
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page == currentPage && `active`}`}
            onClick={() => setCurrentPage(page)}
          >
            <a className="page-link" href={baseURL + '/popular-dreams/' + searchText + '?pnum=' + page}>
              {page}
            </a>
          </li>
        ))}
        <li className={`page-item ${startingIndex + 6 > totalPages && `disabled`}`}>
          <a className="page-link" href={baseURL + '/popular-dreams/' + searchText + '?pnum=' + (startingIndex + 6)}>
            &raquo;
          </a>
        </li>
      </ul>
    )
  } else {
    return (
      <ul className="pagination">
        <li className={`page-item ${currentPage == 1 && `disabled`}`}>
          <a className="page-link" href={baseURL + '/dream-interpretation-search/' + (startingIndex - 1)}>
            &laquo;
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page == currentPage && `active`}`}
            onClick={() => setCurrentPage(page)}
          >
            <a className="page-link" href={baseURL + '/dream-interpretation-search/' + page}>
              {page}
            </a>
          </li>
        ))}
        <li className={`page-item ${startingIndex + 6 > totalPages && `disabled`}`}>
          <a className="page-link" href={baseURL + '/dream-interpretation-search/' + (startingIndex + 6)}>
            &raquo;
          </a>
        </li>
      </ul>
    )
  }
}

export default Paginate
