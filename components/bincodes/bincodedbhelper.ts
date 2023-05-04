import {sql_query} from 'data/lib/mysql'

export async function getBinIdDetails(binid: string) {
  try {
    const query = 'SELECT *, "1" as id FROM BIN_CODES Where bin =' + binid
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getIssuerDetails(issuer: string) {
  try {
    const query =
      'SELECT distinct issuer,bank_phone,bank_url,issuer_url, "1" as id FROM BIN_CODES  Where issuer_url =' +
      '"' +
      issuer +
      '" limit 0,1 '
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getRelevantIssuers(country: string) {
  try {
    const query =
      'SELECT  COUNT(issuer), issuer,bank_phone,bank_url,issuer_url, "1" as id FROM BIN_CODES  Where country =' +
      '"' +
      country +
      '" and issuer<>"" group by issuer ORDER BY COUNT(issuer)  DESC limit 0,50 '
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getTopIssuers() {
  try {
    const query =
      'SELECT  COUNT(issuer), issuer,bank_phone,bank_url,issuer_url, "1" as id FROM BIN_CODES  Where issuer<>"" group by issuer ORDER BY COUNT(issuer)  DESC limit 0,50 '
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function relatedCountryCodes(country: string) {
  try {
    const query = 'SELECT bin FROM BIN_CODES  Where country =' + '"' + country + '" limit 0,100'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getBrandCodes(brand: string) {
  try {
    const query = 'SELECT bin FROM BIN_CODES  Where brand =' + '"' + brand + '" limit 0,100'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function relatedCountryBrandCodes(country: string, brand: string) {
  try {
    const query =
      'SELECT bin FROM BIN_CODES  Where country =' + '"' + country + '" and brand =' + '"' + brand + '" limit 0,50'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getCategoryCodes(category: string) {
  try {
    const query = 'SELECT bin FROM BIN_CODES  Where category =' + '"' + category + '" limit 0,100'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function relatedCountryCategoryCodes(country: string, category: string) {
  try {
    const query =
      'SELECT bin FROM BIN_CODES  Where country =' +
      '"' +
      country +
      '" and category =' +
      '"' +
      category +
      '" limit 0,50'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getCardTypeCodes(type: string) {
  try {
    const query = 'SELECT bin FROM BIN_CODES  Where type =' + '"' + type + '" limit 0,100'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function relatedCountryCardTypeCodes(country: string, type: string) {
  try {
    const query =
      'SELECT bin FROM BIN_CODES  Where country =' + '"' + country + '" and type =' + '"' + type + '" limit 0,50'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getCounryDetails(country: any) {
  try {
    const query =
      'SELECT distinct alpha_2,alpha_3,country,latitude,longitude, "1" as id FROM BIN_CODES  Where country =' +
      '"' +
      country +
      '" limit 0,1 '
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function relatedIssuerCodes(binid: string) {
  try {
    const query = 'SELECT * FROM BIN_CODES  Where bin =' + binid
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return 'error'
  }
}

export async function getIssuerCodes(issuer_url: string) {
  try {
    const query = 'SELECT bin FROM BIN_CODES  Where issuer_url =' + '"' + issuer_url + '" limit 0,100'
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}

export async function getAllIssuers() {
  try {
    const query = 'SELECT DISTINCT issuer, issuer_url FROM BIN_CODES Where issuer<>""  '
    const results = await sql_query(query)
    return JSON.parse(JSON.stringify(results))
  } catch (e: any) {
    return null
  }
}
