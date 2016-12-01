function buildCounter(name, count = 0){
  id = (new Date()).getTime();
  return {
    id,
    name,
    count
  }
}