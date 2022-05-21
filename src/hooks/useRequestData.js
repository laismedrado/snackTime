import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)
  const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJjQXBxSzVCY3ZlVWxodzNBdWhhIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldnRlc3RlQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS4yMjItMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXp6eiwgMTc3OCwgNzExIC0gVmlsYSBOLiBDb25jZWnDp8Ojb28iLCJpYXQiOjE2NDUxMTgwODN9.J2c7hQS-Al-e7aEwm4gmpFXm1tf10EvNIsEhYuW-2pI"

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: auth
        }
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err)
        alert('Ocorreu um erro, tente novamente!')
      })
  }, [url])
  return (data)
}