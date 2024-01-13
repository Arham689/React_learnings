import React from 'react'

export function felterTheData(term, resList) {
    if (!term) {
      return resList;
    }
    let lowerTerm = term.toLowerCase()
    // this filter will return a array at the fun call haing content having only that is matched to term 
    return resList.filter((item) => { return item.info.name.toLowerCase().includes(lowerTerm) })
  }