document.addEventListener('DOMContentLoaded', e => {
  const list = $('#list')


  let items = []
  let cart = {}
  let favs = {}
  let displayLimit = 10
  let displayData = []


  window.dataLayer = window.dataLayer || [];

  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  if (localStorage.getItem("favs")) {
    favs = JSON.parse(localStorage.getItem("favs"));
  }

  const deals = async (gameData) => {
    
    for (let i = 0; i < gameData.length; i++) {
      let response = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameData[i].gameID}`)
      let responseData = await response.json()

      let price = parseFloat(responseData.deals[0].price)
      let retailPrice = parseFloat(responseData.deals[0].retailPrice)

      if (price < retailPrice) {
        items.push({ name: responseData.info.title, thumb: responseData.info.thumb, deal: responseData.deals[0] })
      }

      items.sort((a, b) => {
        return parseFloat(b.deal.savings) - parseFloat(a.deal.savings)
      })

    }

    $('.loading').addClass('hidden');

    loadData()
  }

  fetch('https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0')
    .then((response) => response.json())
    .then((data) => {
      deals(data)
    })


  const getTemplate = (data) => {
    const template = `<div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4 item" data-id="${data.deal.dealID}" onclick="productClick(this)">
        <div
          class="c-card block bg-white shadow-md rounded-lg overflow-hidden h-full"
        >
          <div class="relative pb-48 overflow-hidden">
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="${data.thumb}"
              alt=""
            />
          </div>
          <div class="p-4 flex flex-col items-center">
            <span
              class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
              >%${Math.round(data.deal.savings)} İNDİRİM</span
            >
            <h2 class="mt-2 mb-2 font-bold text-center xl:mx-10 sm:h-12">
            ${data.name}
            </h2>
            <div class="flex items-center">
                &nbsp<span
                class="text-sm line-through mr-4"
                >${data.deal.retailPrice} $</span>
                <span class="font-bold text-lg"
                >${data.deal.price} $</span>
            </div>
            <div class="mt-3 flex gap-2 md:gap-6 items-center">
             <button id="addToCart" class="bg-slate-500 text-white rounded-md shadow-sm hover:shadow-xl px-2 md:px-5 py-1 text-xs" onclick="addToCart(this)" >Sepete Ekle</button>
             <button id="addToFav" class="bg-slate-500 text-white rounded-md shadow-sm hover:shadow-xl px-2 md:px-5 py-1 text-xs" onclick="addToFav(this)">Favorilere Ekle</button>
            </div>
          </div>
        </div>
      </div>`

    return template
  }

  addToCart = (element) => {
    const dealID = element.closest('.item').getAttribute('data-id')

    if (dealID in cart) {
      delete cart[dealID];
      element.innerHTML = "Çıkartıldı"
      localStorage.setItem("cart", JSON.stringify(cart));

      dataLayer.push({ 'removeToCart': dealID });

      setTimeout(() => {
        element.innerHTML = "Sepete Ekle"
      }, 700);

    } else {
      cart[dealID] = dealID
      localStorage.setItem("cart", JSON.stringify(cart));
      element.innerHTML = "Eklendi"

      dataLayer.push({ 'addToCart': dealID });

      setTimeout(() => {
        element.innerHTML = "Sepetten Çıkar"
      }, 700);
    }
  }

  addToFav = (element) => {
    const dealID = element.closest('.item').getAttribute('data-id')

    if (dealID in favs) {
      delete favs[dealID];
      element.innerHTML = "Çıkartıldı"
      localStorage.setItem("favs", JSON.stringify(favs));

      setTimeout(() => {
        element.innerHTML = "Favorilere Ekle"
      }, 700);
    } else {
      cart[dealID] = dealID
      localStorage.setItem("favs", JSON.stringify(cart));
      element.innerHTML = "Favorilere Eklendi"

      setTimeout(() => {
        element.innerHTML = "Favorilerden Çıkar"
      }, 700);
    }
  }

  productClick = (element) => {
    dataLayer.push({ 'product_click': element.closest('.item').getAttribute('data-id') });
    console.log(dataLayer);
  }
  const loadData = () => {

    const container = list[0]

    for (var i = 0; i < displayLimit; i++) {
      const currentIndex = displayData.length

      if (currentIndex > items.length) {
        break
      }

      const item = items[currentIndex]

      displayData.push(item)

      const gameTemplate = document.createRange().createContextualFragment(getTemplate(item))

      if (cart[item?.deal.dealID]) {
        gameTemplate.querySelector('button#addToCart').innerHTML = "Sepetten Çıkar"
      }

      if (favs[item?.deal.dealID]) {
        gameTemplate.querySelector('button#addToFav').innerHTML = "Favorilerden Çıkar"
      }

      container.appendChild(gameTemplate)
    }
  }

  $('.Path').scroll(function (event) {
    let container = document.querySelector('.Path')
    let scrollTop = this.pageYOffset || container.scrollTop

    if (container.scrollHeight - scrollTop === parseFloat(container.clientHeight)) {
      loadData()
    }
  })
})