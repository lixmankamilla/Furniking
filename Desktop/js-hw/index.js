// OFFERS

const offersSection = document.querySelector(".offers-section")

// left block

const offersWrapperLeft = document.createElement("div")
offersWrapperLeft.className = "offers-wrapper"


// element

const offersLeftBlockLink = document.createElement("a")
offersLeftBlockLink.className = "offer-01"
offersWrapperLeft.append(offersLeftBlockLink)

const offersLeftBlockImgDiv = document.createElement("div")
offersLeftBlockImgDiv.className = "offer-01-img"

offersLeftBlockLink.append(offersLeftBlockImgDiv)

const offersLeftBlockImg = document.createElement("img")
offersLeftBlockImg.src = "img/collections-section/01.jpg"

offersLeftBlockImgDiv.append(offersLeftBlockImg)

const offersLeftBlockDesc = document.createElement("div")
offersLeftBlockDesc.className = "offer-desc01"

offersLeftBlockLink.append(offersLeftBlockDesc)

const offersLeftBlockDescHeader = document.createElement("div")
offersLeftBlockDescHeader.className = "desc-header"
offersLeftBlockDescHeader.textContent = "Modern Furniture Collections"

offersLeftBlockDesc.append(offersLeftBlockDescHeader)

const offersLeftBlockPriceInfo = document.createElement("div")
offersLeftBlockPriceInfo.className = "price-info"
offersLeftBlockPriceInfo.textContent = "Starting from $500"

offersLeftBlockDesc.append(offersLeftBlockPriceInfo)

const offersLeftBlockReadMore = document.createElement("div")
offersLeftBlockReadMore.className = "read-more"
offersLeftBlockReadMore.textContent = "Read more"

offersLeftBlockDesc.append(offersLeftBlockReadMore)


// rigth block

const offersWrapperRigth = document.createElement("div")
offersWrapperRigth.className = "offers-wrapper2"

// rigth block 1 element

const offersRigthBlockLink1 = document.createElement("a")
offersRigthBlockLink1.className = "offer-02"

offersWrapperRigth.append(offersRigthBlockLink1)

const offersRightBlockImgDiv1 = document.createElement("div")
offersRightBlockImgDiv1.className = "offer-02-img"

offersRigthBlockLink1.append(offersRightBlockImgDiv1)

const offersRigthBlockImg1 = document.createElement("img")
offersRigthBlockImg1.src = "img/collections-section/02.jpg"

offersRightBlockImgDiv1.append(offersRigthBlockImg1)

const offersRightBlockDesc1 = document.createElement("div")
offersRightBlockDesc1.className = "offer-desc02"

offersRigthBlockLink1.append(offersRightBlockDesc1)

const offersRightBlockDescHeader1 = document.createElement("div")
offersRightBlockDescHeader1.className = "desc-header"
offersRightBlockDescHeader1.textContent = "Geometric Bookcase"

offersRightBlockDesc1.append(offersRightBlockDescHeader1)

const offersRightBlockPriceInfo1 = document.createElement("div")
offersRightBlockPriceInfo1.className = "price-info"
offersRightBlockPriceInfo1.textContent = "Up to 20% discount"

offersRightBlockDesc1.append(offersRightBlockPriceInfo1)

const offersRightBlockReadMore1 = document.createElement("div")
offersRightBlockReadMore1.className = "read-more"
offersRightBlockReadMore1.textContent = "Read more"

offersRightBlockDesc1.append(offersRightBlockReadMore1)


// right block 2 element

const offersRigthBlockLink2 = document.createElement("a")
offersRigthBlockLink2.className = "offer-03"

offersWrapperRigth.append(offersRigthBlockLink2)

const offersRightBlockImgDiv2 = document.createElement("div")
offersRightBlockImgDiv2.className = "offer-03-img"

offersRigthBlockLink2.append(offersRightBlockImgDiv2)

const offersRigthBlockImg2 = document.createElement("img")
offersRigthBlockImg2.src = "img/collections-section/03.jpg"

offersRightBlockImgDiv2.append(offersRigthBlockImg2)

const offersRightBlockDesc2 = document.createElement("div")
offersRightBlockDesc2.className = "offer-desc03"

offersRigthBlockLink2.append(offersRightBlockDesc2)

const offersRightBlockDescHeader2 = document.createElement("div")
offersRightBlockDescHeader2.className = "desc-header"
offersRightBlockDescHeader2.textContent = "Minimal Sofa collections"

offersRightBlockDesc2.append(offersRightBlockDescHeader2)

const offersRightBlockPriceInfo2 = document.createElement("div")
offersRightBlockPriceInfo2.className = "price-info"
offersRightBlockPriceInfo2.textContent = "Sale upto 40% discount"

offersRightBlockDesc2.append(offersRightBlockPriceInfo2)

const offersRightBlockReadMore2 = document.createElement("div")
offersRightBlockReadMore2.className = "read-more"
offersRightBlockReadMore2.textContent = "Read more"

offersRightBlockDesc2.append(offersRightBlockReadMore2)

// append all blocks to the parent block

offersSection.append(offersWrapperLeft)
offersSection.append(offersWrapperRigth)


// TRENDING

const trendingArr = [
   {
     img: "img/trending-section/01.jpg",
     productType: "Chair",
     productName: "Minimal LCD chair",
     productNewPrice: "$180",
     productOldPrice: "$250",
     status: "New"
   },

   {
    img: "img/trending-section/02.jpg",
    productType: "Chair",
    productName:  "Minimal iconic chair",
    productNewPrice: "$120",
    productOldPrice: "$150",
    status: "New"
  },

  {
    img: "img/trending-section/03.jpg",
    productType: "Chair",
    productName:  "Dining chairs",
    productNewPrice: "$100",
    productOldPrice: "$120",
    status: "Sale"
  },

  {
    img: "img/trending-section/04.jpg",
    productType: "Chair",
    productName:  "Buskbo armchair",
    productNewPrice: "$130",
    productOldPrice: "$150",
    status: "Sale"
  },

  {
    img: "img/trending-section/05.jpg",
    productType: "Chair",
    productName:  "Modern chairs",
    productNewPrice: "$100",
    productOldPrice: "$120",
    status: "Sale"
  },

  {
    img: "img/trending-section/06.jpg",
    productType: "Chair",
    productName:  "Plastic dining chair",
    productNewPrice: "$130",
    productOldPrice: "$150",
    status: "Sale"
  },

  {
    img: "img/trending-section/07.jpg",
    productType: "Chair",
    productName:  "Minimal Wood chair",
    productNewPrice: "$180",
    productOldPrice: "$250",
    status: "New"
  },

  {
    img: "img/trending-section/08.jpg",
    productType: "Chair",
    productName:  "Elegent wood chair",
    productNewPrice: "$120",
    productOldPrice: "$150",
    status: "New"
  },
]


const trendingProductsList = document.querySelector(".trending-products-list")

trendingArr.forEach((item) => {

let status = "new"

if(item.status === "Sale") {
  status = "sale"
}
 const itemElement = `
 <li class="trending-products-list-item">
     <a href="#">
         <div class="item-img">
           <div class="trending-products-list-item-status-${status}">${item.status}</div>
             <img src=${item.img} alt="01">
             <div class="item-icons">
                 <button class="item-icons-btn">
                     <img src="img/trending-section/heart-icon.svg" alt="like">
                 </button>
                 <button class="item-icons-btn">
                     <img src="img/trending-section/add-to-busket-icon.svg" alt="busket">
                 </button>
                 <button class="item-icons-btn">
                     <img src="img/trending-section/refresh-icon.svg" alt="refresh">
                 </button>
                 <button class="item-icons-btn">
                     <img src="img/trending-section/view-icon.svg" alt="view">
                 </button>
             </div>
         </div>
         <div class="product-type">
           ${item.productType}
         </div>
         <div class="item-name">
           ${item.productName}
         </div>
         <div class="item-wrapper">
             <div class="item-price">
                 <div class="item-new-price">
                   ${item.productNewPrice}
                 </div>
                 <div class="item-old-price">
                     ${item.productOldPrice}
                 </div>
             </div>
             <div class="item-stars">
                 <img src="img/trending-section/review.svg" alt="review">
             </div>
         </div>
     </a>
   </li>
 `
 trendingProductsList.innerHTML += itemElement
})


// OUR PRODUCTS

productsArr = [
  {
    img: "img/our-products-section/01.jpg",
    productType: "Chair",
    productName: "Minimal LCD chair",
    productNewPrice: "$180",
    productOldPrice: "$250",
    status: "Sale"
  },

  {
   img: "img/our-products-section/02.jpg",
   productType: "Sofa",
   productName:  "Modern Sofa",
   productNewPrice: "$120",
   productOldPrice: "$150",
   status: "New"
 },

 {
   img: "img/our-products-section/03.jpg",
   productType: "Sofa",
   productName:  "Microfiber Sofa",
   productNewPrice: "$100",
   productOldPrice: "$120",
   status: "-30%"
 },

 {
   img: "img/our-products-section/04.jpg",
   productType: "Table",
   productName:  "Wood Coffee Tables ",
   productNewPrice: "$130",
   productOldPrice: "$150",
   status: "Sale"
 },

 {
   img: "img/our-products-section/05.png",
   productType: "Chair",
   productName:  "Acacia Wood Club Chairs",
   productNewPrice: "$100",
   productOldPrice: "$120",
   status: "-30%"
 },

 {
   img: "img/our-products-section/06.png",
   productType: "Bench",
   productName:  "Amalia Cowhide Bench",
   productNewPrice: "$130",
   productOldPrice: "$150",
   status: "Sale"
 },

 {
   img: "img/our-products-section/07.png",
   productType: "Storage",
   productName:  "Juno-Hinged Lid Storage",
   productNewPrice: "$180",
   productOldPrice: "$250",
   status: "New"
 },

 {
   img: "img/our-products-section/08.jpg",
   productType: "Furniture",
   productName:  "Delicia 3 Piece Living Room",
   productNewPrice: "$120",
   productOldPrice: "$150",
   status: "New"
 },
]

const ourProductsList = document.querySelector(".our-products-list")

productsArr.forEach((item) => {
let status = "discount"

if(item.status === "Sale") {
  status = "sale"
} else if(item.status === "New") {
  status = "new"
}
  const itemElement = ` 
  <li class="our-products-list-item">
  <a href="#">
      <div class="item-img">
         <div class="our-products-list-item-status-${status}">${item.status}</div>
          <img src=${item.img} alt="01">
          <div class="item-icons">
              <button class="item-icons-btn">
                  <img src="img/trending-section/heart-icon.svg" alt="like">
                  <img src="img/our-products-section/like-white.svg" alt="like">
              </button>
              <button class="item-icons-btn">
                  <img src="img/trending-section/add-to-busket-icon.svg" alt="busket">
                  <img src="img/our-products-section/add-to-busket-white.svg" alt="busket">
              </button>
              <button class="item-icons-btn">
                  <img src="img/trending-section/refresh-icon.svg" alt="refresh">
                  <img src="img/our-products-section/refresh-white.svg" alt="refresh">
              </button>
              <button class="item-icons-btn">
                  <img src="img/trending-section/view-icon.svg" alt="view">
                  <img src="img/our-products-section/eye-white.svg" alt="view">
              </button>
          </div>
      </div>
      <div class="product-type">
          ${item.productType}
      </div>
      <div class="item-name">
          ${item.productName}
      </div>
      <div class="item-wrapper">
          <div class="item-price">
              <div class="item-new-price">
                  ${item.productNewPrice}
              </div>
              <div class="item-old-price">
                  ${item.productOldPrice}
              </div>
          </div>
          <div class="item-stars">
              <img src="img/trending-section/review.svg" alt="review">
          </div>
      </div>
  </a>
 </li>
`
ourProductsList.innerHTML += itemElement
})

// OUR LATEST ARTICLES

const articlesArr = [
  {
    img: "img/latest-articles-section/01.jpg",
    tag: "Furniture",
    date: "23 September 2022",
    header: "Begineer guide buying minimal sofa"
  },

  {
    img: "img/latest-articles-section/02.jpg",
    tag: "TABLE",
    date: "23 September 2022",
    header: "Buying best minimal computer table"
  },

  {
    img: "img/latest-articles-section/03.jpg",
    tag: "Bench",
    date: "23 march 2022",
    header: "How to choose best modern bench"
  },

  {
    img: "img/latest-articles-section/04.jpg",
    tag: "Chair",
    date: "23 March 2022",
    header: "Best Summer Outfit Style in this Country"
  }
]

const articlesList = document.querySelector(".articles-list")

articlesArr.forEach((item) => {
  const itemElement = `
  <li class="articles-list-item">
                    <a href="#">
                        <div class="item-img">
                            <img src=${item.img} alt="01">
                        <div>
                        <div class="desc-wrapper">
                            <div class="top-part-wrapper">
                                <div class="tag">
                                   ${item.tag}
                                </div>
                                <div class="date">
                                    ${item.date}
                                </div>
                            </div>    
                            <div class="item-header">
                                    ${item.header}
                            </div>
                            <div class="read-more">
                                Read more
                            </div> 
                        </div>
                    </a>
                </li>
  `
  articlesList.innerHTML += itemElement
})
