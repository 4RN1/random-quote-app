const randomText = document.getElementById('randText')
const genBtn = document.getElementById('genbtn')


const apiKey = "lTpCN5USxl040Py2Y49Weg==FAkTQWRvj08YsCcP"

genBtn.addEventListener('click' , ()=> {
  getQuote();
})

async function getQuote() {
try {

  const response = await fetch ('https://api.api-ninjas.com/v1/quotes' ,{
    headers: { 'X-Api-Key': `${apiKey}`},

})
if(!response.ok) {
  console.log('failed to fetch data');
  return
} else {
    const data = await response.json()
    console.log(data);
    

randomText.textContent = `${data[0].quote} - ${data[0].author}`

  }

} catch (error)
 {
    alert('Something went wrong')
}

}

