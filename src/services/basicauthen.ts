
export const getBasicAuthen = (username: any, password: any) => {
  return "Basic " + Buffer.from(username+":"+password).toString('base64')
}
