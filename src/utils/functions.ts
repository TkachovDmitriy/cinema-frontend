import { DateTime } from 'luxon'

/**
 * Deep merges two objets.
 * @param  {Object} object destination object
 * @param  {Object} source source obejct
 *
 * @returns {Object} new object
 */
export const merge = (obj: any, source: any): any => {
  if (obj === source) return obj
  const newValue: any = {
    ...obj,
    ...source
  }

  Object.entries(source).forEach(([key, value]) => {
    newValue[key] =
      obj[key] && typeof obj[key] === 'object' ? merge(obj[key], value) : value
  })

  return newValue
}

/**
 * Return a copy of an object excluding the given key, or array of keys.
 *
 * @param {object} obj - initial object
 * @param {(string | string[])} props - values to be omitted
 */
export const omit = <T = Record<string, unknown>>(
  input: any,
  fields: any
): T => {
  const output = {} as T

  Object.keys(input).forEach((prop) => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop]
    }
  })

  return output
}

/**
 * Change date format
 *
 * @param {string} date - string
 * @param {string} format - format date string from moment.js
 */
export const humanizeDate = (date: string, format = 'DDD'): string => {
  return DateTime.fromISO(date).toFormat(format)
}

/**
 * Returns the key by which you can take a message from translations for filters
 *
 * @param {string} slug - field name
 * @param {string} link - field value
 */
export const generateSlugLink = (params, link: string): string => {
  Object.entries(params).map(([key, value]) => {
    link = link.replace(`${key}`, value as string)
  })

  return link
}

/**
 * Creates options for Autocomplete
 *
 * @param {array} data - data array
 * @param {string} key1 - object key1
 * @param {string} key2 - object key2
 */
export const createOptions = (
  data: Array<{
    [key: string]: any
  }>,
  key1 = 'id',
  key2 = 'name',
  withoutData = false
): {
  value: string
  label: string
  [key: string]: string
}[] => {
  if (!data || !Array.isArray(data)) return []

  return data
    .filter(Boolean)
    .map(({ [key1]: value, [key2]: label, ...rest }) => ({
      value,
      label,
      ...(!withoutData && rest)
    }))
}
