function eraCheck(year){
    if(year < 0){
      let yearString = new String(year)
      return yearString.slice(1) + ' B.C'
    }
    return new String(year)
}

export default eraCheck