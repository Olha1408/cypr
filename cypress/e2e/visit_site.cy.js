import MarketplacePage from './marketplace-page'

describe('Marketplace', () => {
  beforeEach(() => {
    MarketplacePage.visit()
    MarketplacePage.assertUrl()
  })

  it('should navigate to the Samsung phones category', () => {
    MarketplacePage.selectCategory('Каталог товарів')
    MarketplacePage.selectSubcategory('Смартфони та телефони')
    MarketplacePage.selectSubcategory('Виробники')
    MarketplacePage.selectSubcategory('Samsung')

    // Add your assertions here
  

   

    // Add Samsung phone to basket

    // Verify Samsung phone is in the basket

  })
})
