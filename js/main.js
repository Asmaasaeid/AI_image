const api = "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";
const inp = document.getElementById('inp')
const images =document.querySelector('.images')

const getImage  = async () => {
   // make a request to open api

   const methods = {
      method:"POST",
      headers:{
         "Content-Type": "application/json",
         "Authorization":`Bearer ${api}`
      },
      body:JSON.stringify (
         {

            "prompt":inp.value,
            "n" : 3 ,
            "size" :"256x256"
         }
      )
   }
  const res = await fetch("https://api.openai.com/v1/images/generations",methods)
// pares the response as json
const data = await res.json()
const listImages = data.data;
listImages.map(photo => {
   const container =document.createElement("div")
   images.append(container)
   const img = document.createElement("img")
   container.append(img)
   img.src = photo.url
}) 
}