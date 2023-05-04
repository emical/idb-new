/* eslint-disable react/jsx-key */
import React, {useState, useEffect} from 'react'
import DreamsHeader from './DreamsHeader'
import PostCard from './PostCard'
import Loader from './Loader'
import Paginate from './Paginate'
import {menuJson} from 'data/menu'

const Posts = (props: {
  dreamsList: any
  pnum: number
  searchPlaceholder: any
  fromsearch: any
  searchText: any
  totalPosts: any
  frompopuplar: any
}) => {
  const {dreamsList, pnum, searchPlaceholder, fromsearch, searchText, totalPosts, frompopuplar} = props
  const [search, setSearch] = useState('')
  const loading = false
  // const dispatch = useDispatch()
  // const {posts, loading} = useSelector((state) => state.PostReducers)
  const [currentPage, setCurrentPage] = useState(pnum)

  const handleChangeSearch = (e: any) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1)
    }
    setSearch(e.target.value)
  }

  // useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [dispatch])

  const postPerPage = 25
  const totalPostsCount: number = parseInt(totalPosts) ? parseInt(totalPosts) : 6000

  // const indexOfLastPost = currentPage * postPerPage
  // const indexOfFirstPost = indexOfLastPost - postPerPage
  // const filterPosts = menuJson.menu?.menuitems.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <DreamsHeader
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
        searchPlaceholder={searchPlaceholder}
      />
      <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-5152402002915558"
        data-ad-slot="6398249164"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
        {' '}
      </ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="posts">
            {dreamsList.map((dream: {categoryUrl: any; category: any; catdesc: any}) => (
              // {filterPosts.map((post) => (
              <div key={dream?.catdesc}>
                <PostCard post={dream} fromsearch={fromsearch} />
              </div>
            ))}
          </div>
          <ins
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-5152402002915558"
            data-ad-slot="4119021443"
            data-ad-format="autorelaxed"
            data-full-width-responsive="true"
          >
            {' '}
          </ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          {totalPostsCount > postPerPage && (
            <Paginate
              searchText={searchText}
              fromsearch={fromsearch}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={totalPostsCount}
              postPerPage={postPerPage}
              frompopuplar={frompopuplar}
            />
          )}
        </div>
      )}
    </>
  )
}

export default Posts
