import {default as countries} from './countries.json'
import {default as brands} from './brands.json'
import {default as cardtypes} from './cardtypes.json'
import {default as categories} from './categories.json'
import {default as topCategories} from './topCategories.json'
import {default as largeCountries} from './largestCoutries.json'

export function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const countriesList = countries
export const brandsList = brands
export const cardtypesList = cardtypes
export const categoriesList = categories
export const topCategoriesList = topCategories
export const largeCountriesList = largeCountries
