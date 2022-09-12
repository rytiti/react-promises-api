import axios from "axios";


export async function getOneApiQuote() { 
  return new Promise((resolve, reject) => {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}