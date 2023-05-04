import {sql_query} from 'data/lib/mysql'

export async function getCategoryDreams(categoryid: string) {
  try {
    const query = 'SELECT * FROM `isdreams` where `category-slug`="' + categoryid + '"'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function GetAllCategories(startIndex: number) {
  try {
    const query =
      'SELECT DISTINCT `category-slug` as categoryUrl , category,MAX(`desc`)  as `catdesc` FROM `isdreams`  Where `desc`<>"" GROUP By `category-slug` ORDER BY category ASC LIMIT ' +
      startIndex +
      ',' +
      25 +
      ''
    const results = await sql_query(query)

    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function GetPopularDreamsByString(popularTypeString: any, startIndex: number) {
  try {
    const query =
      'SELECT DISTINCT `category-slug` as categoryUrl , category,MAX(`desc`)  as `catdesc` FROM `isdreams`  Where `desc`<>"" and' +
      popularTypeString +
      ' GROUP By `category-slug` ORDER BY category ASC LIMIT ' +
      startIndex +
      ',' +
      25 +
      ''
    const results = await sql_query(query)

    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function GetPopularDreamsCountByString(popularTypeString: any) {
  try {
    const query =
      'Select count(*) as dcount from (SELECT DISTINCT `category-slug` as categoryUrl , category,MAX(`desc`)  as `catdesc` FROM `isdreams`  Where `desc`<>"" and' +
      popularTypeString +
      ' GROUP By `category-slug`) as `#temp` '
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function searchByString(queryString: string, startIndex: number) {
  try {
    const query =
      "SELECT category,`desc` as `catdesc`,`category-slug` as categoryUrl, title, tag, `tag-slug` as tagUrl FROM `isdreams` where `category` like '%" +
      queryString +
      "%' or title like '%" +
      queryString +
      "%' or tag like '%" +
      queryString +
      "%' ORDER BY `category-slug` DESC Limit " +
      startIndex +
      ',' +
      25
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function searchCountByString(queryString: string) {
  try {
    const query =
      "SELECT count(*) as dcount FROM `isdreams` where `category` like '%" +
      queryString +
      "%' or title like '%" +
      queryString +
      "%' or tag like '%" +
      queryString +
      "%' "
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}
