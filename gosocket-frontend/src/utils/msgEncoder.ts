export const msgEncoder = (msg: string) => {
  const obj = {
    "greeting": msg
  }
  
  return JSON.stringify(obj);
  
}