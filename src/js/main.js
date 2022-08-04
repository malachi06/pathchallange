document.addEventListener('DOMContentLoaded', e => {
  const list = $('#list')

  /*  const DATA = [
     {
       "name": "Batman: Arkham VR",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/502820/capsule_sm_120.jpg?t=1617134787",
       "deal": {
         "storeID": "15",
         "dealID": "VcpkOmgsL8LmPiKN7%2BzVQm1g4xi%2B0dXAk3fMyi%2B6Xnw%3D",
         "price": "15.89",
         "retailPrice": "19.99",
         "savings": "20.510255"
       }
     },
     {
       "name": "LEGO Batman 2",
       "thumb": "https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg",
       "deal": {
         "storeID": "15",
         "dealID": "2XSMlnYtPjLoKI9g2vhZch9deHZ%2BE%2BpL7IoBprkWtgM%3D",
         "price": "16.05",
         "retailPrice": "19.99",
         "savings": "19.709855"
       }
     },
     {
       "name": "LEGO Batman",
       "thumb": "https://originassets.akamaized.net/origin-com-store-final-assets-prod/195763/142.0x200.0/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg",
       "deal": {
         "storeID": "23",
         "dealID": "tyTH88J0PXRvYALBjV3cNHd5Juq1qKcu4tG4lBiUCt4%3D",
         "price": "14.95",
         "retailPrice": "19.99",
         "savings": "25.212606"
       }
     },
     {
       "name": "Batman: Arkham Knight",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/capsule_sm_120.jpg?t=1634156452",
       "deal": {
         "storeID": "15",
         "dealID": "PoyZQqPow3a4usGP%2Bsak3nhwFov5qquV%2BauZgNoVWsY%3D",
         "price": "15.89",
         "retailPrice": "19.99",
         "savings": "20.510255"
       }
     },
     {
       "name": "Batman Arkham City GOTY",
       "thumb": "https://us.gamesplanet.com/acache/15/46/1/us/packshot-92b3116edd0584b61a131fa716d0a766.jpg",
       "deal": {
         "storeID": "27",
         "dealID": "DnVEZriqpYWyJoC4CN2%2Fe07Su8RZ61DATyjmfNk%2FwKI%3D",
         "price": "15.99",
         "retailPrice": "19.99",
         "savings": "20.010005"
       }
     },
     {
       "name": "LEGO Batman 2: DC Super Heroes",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/213330/capsule_sm_120.jpg?t=1573510008",
       "deal": {
         "storeID": "23",
         "dealID": "SmBhhdBiacq04keakHZl3r4pIsPT%2BD%2FsCi2p0avcDG4%3D",
         "price": "14.95",
         "retailPrice": "19.99",
         "savings": "25.212606"
       }
     },
     {
       "name": "Batman: Arkham Origins",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/209000/capsule_sm_120.jpg?t=1634157113",
       "deal": {
         "storeID": "23",
         "dealID": "%2BE8KXr8C9iH3LpIQBYLfF6ikOTAKXB94Z6Z0wLkR7hs%3D",
         "price": "14.95",
         "retailPrice": "19.99",
         "savings": "25.212606"
       }
     },
     {
       "name": "Batman: Arkham Knight - Season Pass",
       "thumb": "https://images.greenmangaming.com/b818c7f3f6b44e9193eea50f33b6f042/e646afc03bf24aa1a0a872f3e8f8c8bb.jpg",
       "deal": {
         "storeID": "15",
         "dealID": "JbA9gJLle%2BL1l%2B7hY8Ldz6v5WgVplCepsHPlvGaCf1s%3D",
         "price": "15.89",
         "retailPrice": "19.99",
         "savings": "20.510255"
       }
     },
     {
       "name": "LEGO Batman 3: Beyond Gotham",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/313690/capsule_sm_120.jpg?t=1573510385",
       "deal": {
         "storeID": "23",
         "dealID": "GIen44MQlervWwNXw1e1k2ydTlgX8fzBHFbRgWKUGSs%3D",
         "price": "14.95",
         "retailPrice": "19.99",
         "savings": "25.212606"
       }
     },
     {
       "name": "Batman: Arkham Collection",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/subs/320795/capsule_sm_120.jpg?t=1636658684",
       "deal": {
         "storeID": "27",
         "dealID": "TbThFJqL09v85IPQUBfA0viG11N%2BklkJMBtGuTQPeGw%3D",
         "price": "50.99",
         "retailPrice": "59.99",
         "savings": "15.002500"
       }
     },
     {
       "name": "Batman: Arkham Origins Blackgate - Deluxe Edition",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/267490/capsule_sm_120.jpg?t=1651865751",
       "deal": {
         "storeID": "15",
         "dealID": "VP31qqb9KnLsoG8XAN8MlUpzl85EkvJ2Pd%2FEHcdWlX0%3D",
         "price": "15.89",
         "retailPrice": "19.99",
         "savings": "20.510255"
       }
     },
     {
       "name": "Batman Arkham Origins Season Pass",
       "thumb": "https://images.greenmangaming.com/1c43fd1ff43744c08e854d6ff963c91d/2c8b09a294f4401ab3747b99b6d828f1.jpg",
       "deal": {
         "storeID": "21",
         "dealID": "%2BThIUJIoyxRy9u7NDjuvidcljQ6heP%2FiEmWT%2FkUc5aE%3D",
         "price": "14.99",
         "retailPrice": "19.99",
         "savings": "25.012506"
       }
     },
     {
       "name": "Batman Arkham Asylum GOTY Edition",
       "thumb": "https://hb.imgix.net/2a07e9e90c9af53c5120151c9ff4e0aa3771ce99.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=0f42069b4949098d7d589d28a9f66311",
       "deal": {
         "storeID": "27",
         "dealID": "uppD8xHMJiqlB88HAnAVeVuInMdQh8eIXN0r2eaC6VI%3D",
         "price": "16.99",
         "retailPrice": "19.99",
         "savings": "15.007504"
       }
     },
     {
       "name": "Batman: Arkham Asylum Game of the Year Edition",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/35140/capsule_sm_120.jpg?t=1634156906",
       "deal": {
         "storeID": "23",
         "dealID": "LNCZ5EicmEMiwyfYVw%2FNdGPos9V7MzoPId2UuwaBqvA%3D",
         "price": "14.95",
         "retailPrice": "19.99",
         "savings": "25.212606"
       }
     },
     {
       "name": "Batman Arkham City Game of the Year Edition",
       "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/200260/capsule_sm_120.jpg?t=1634156789",
       "deal": {
         "storeID": "23",
         "dealID": "KTTMUe1iXtTLFVlvb4LjeumTpp5oHZM9uxltmiMIAwQ%3D",
         "price": "14.95",
         "retailPrice": "19.99",
         "savings": "25.212606"
       }
     },
     {
       "name": "LEGO Batman 3: Beyond Gotham Premium Edition",
       "thumb": "https://images-4.gog-statics.com/0d81cdadc840148cbd6e1f1a6897bdf9d38994b3045c7a394f8426a82775b9f4_196.jpg",
       "deal": {
         "storeID": "23",
         "dealID": "5OlfR0VYb4hQuVajmCkgLIWxRd2JlVLwwex7kUE%2BajE%3D",
         "price": "29.74",
         "retailPrice": "34.99",
         "savings": "15.004287"
       }
     },
     {
       "name": "Batman: Arkham Origins - Cold, Cold Heart",
       "thumb": "https://cdn.fanatical.com/production/product/400x225/3f155ecf-8fc0-4212-a7cd-18175986a4bc.jpeg",
       "deal": {
         "storeID": "15",
         "dealID": "eCQ%2FuLWheILp6fhHlymVc2pbnOTs6DJkGY%2FC7zKIT7A%3D",
         "price": "7.89",
         "retailPrice": "9.99",
         "savings": "21.021021"
       }
     },
     {
       "name": "Batman: Arkham Knight - Premium Edition",
       "thumb": "https://images.greenmangaming.com/b47c3b1bc8a5468ab3ada8832be8355c/4de3b472f988463abf6a869bcdda44d7.jpg",
       "deal": {
         "storeID": "23",
         "dealID": "jmXx3skg%2FdKIZzSGTEVFUxE3th1f0%2BPbNlP96is7CqM%3D",
         "price": "29.95",
         "retailPrice": "39.99",
         "savings": "25.106277"
       }
     }
   ]
 
   DATA.sort((a, b) => {
     return parseFloat(b.deal.savings) - parseFloat(a.deal.savings)
   }) */

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