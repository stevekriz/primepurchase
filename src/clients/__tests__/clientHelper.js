import {
  getSingleProductView,
  getSearchView,
  getFeaturedView,
} from '../clientHelpers';

test('getSingleProductView returns correctly transformed data', () => {
  expect(getSingleProductView(singleProductViewData)).toEqual(
    singleProductViewExpectedTransformation
  );
});

test('getSearchView returns correctly transformed data', () => {
  expect(getSearchView(searchViewData)).toEqual(
    searchViewExpectedTranformation
  );
});

test('getFeaturedView returns correctly transformed data', () => {
  expect(getFeaturedView(featuredViewData)).toEqual(
    featuredViewExpectedTransformation
  );
});

const singleProductViewData = {
  from: 1,
  to: 1,
  currentPage: 1,
  total: 1,
  totalPages: 1,
  queryTime: '0.050',
  totalTime: '0.054',
  partial: false,
  canonicalUrl:
    '/v1/products(sku=5706659)?format=json&apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
  products: [
    {
      sku: 5706659,
      score: null,
      productId: null,
      name: 'Apple - AirPods Pro - White',
      source: null,
      type: 'HardGood',
      startDate: '2019-10-28',
      new: false,
      active: true,
      lowPriceGuarantee: false,
      activeUpdateDate: '2020-02-29T01:38:56',
      regularPrice: 249.99,
      salePrice: 199.99,
      clearance: false,
      onSale: true,
      planPrice: null,
      priceWithPlan: [],
      contracts: [],
      priceRestriction: null,
      priceUpdateDate: '2021-04-25T00:01:29',
      digital: false,
      preowned: false,
      carriers: [],
      planFeatures: [],
      devices: [],
      carrierPlans: [],
      technologyCode: null,
      carrierModelNumber: null,
      earlyTerminationFees: [],
      monthlyRecurringCharge: '',
      monthlyRecurringChargeGrandTotal: '',
      activationCharge: '',
      minutePrice: '',
      planCategory: null,
      planType: null,
      familyIndividualCode: null,
      validFrom: null,
      validUntil: null,
      carrierPlan: null,
      outletCenter: null,
      secondaryMarket: null,
      frequentlyPurchasedWith: [],
      accessories: [],
      relatedProducts: [],
      requiredParts: [],
      techSupportPlans: [],
      crossSell: [],
      salesRankShortTerm: null,
      salesRankMediumTerm: null,
      salesRankLongTerm: null,
      bestSellingRank: null,
      url: 'https://api.bestbuy.com/click/-/5706659/pdp',
      spin360Url: null,
      mobileUrl: 'https://api.bestbuy.com/click/-/5706659/pdp',
      affiliateUrl: null,
      addToCartUrl: 'https://api.bestbuy.com/click/-/5706659/cart',
      affiliateAddToCartUrl: null,
      linkShareAffiliateUrl: '',
      linkShareAffiliateAddToCartUrl: '',
      upc: '190199246850',
      productTemplate: 'Headphones_and_Headsets',
      categoryPath: [
        {
          id: 'cat00000',
          name: 'Best Buy',
        },
        {
          id: 'abcat0200000',
          name: 'Audio',
        },
        {
          id: 'abcat0204000',
          name: 'Headphones',
        },
        {
          id: 'pcmcat144700050004',
          name: 'All Headphones',
        },
      ],
      alternateCategories: [],
      lists: [],
      customerReviewCount: 30118,
      customerReviewAverage: 4.7,
      customerTopRated: true,
      format: null,
      freeShipping: true,
      freeShippingEligible: true,
      inStoreAvailability: true,
      inStoreAvailabilityText: null,
      inStoreAvailabilityUpdateDate: '2020-06-26T00:03:45',
      itemUpdateDate: '2021-04-27T17:41:58',
      onlineAvailability: true,
      onlineAvailabilityText: null,
      onlineAvailabilityUpdateDate: '2020-06-26T00:03:45',
      releaseDate: '2019-10-30',
      shippingCost: 0.0,
      shipping: [
        {
          ground: '',
          secondDay: 0.0,
          nextDay: '',
          vendorDelivery: '',
        },
      ],
      shippingLevelsOfService: [
        {
          serviceLevelId: 10,
          serviceLevelName: 'Same Day',
          unitShippingPrice: 5.99,
        },
        {
          serviceLevelId: 20,
          serviceLevelName: 'One Day',
          unitShippingPrice: 0.0,
        },
        {
          serviceLevelId: 14,
          serviceLevelName: 'Two Day',
          unitShippingPrice: 0.0,
        },
      ],
      specialOrder: false,
      shortDescription:
        "Active noise cancellation for immersive sound. Transparency mode for hearing what's happening around you. Sweat- and water-resistant. And more customizable fit for all-day comfort",
      class: 'APPLE HEADPHONES',
      classId: 746,
      subclass: 'APPLE TRUE WIRELESS',
      subclassId: 8421,
      department: 'AUDIO',
      departmentId: 1,
      protectionPlanTerm: 'AIR',
      protectionPlanType: null,
      protectionPlanLowPrice: '',
      protectionPlanHighPrice: '',
      buybackPlans: [],
      protectionPlans: [],
      protectionPlanDetails: [],
      productFamilies: [],
      productVariations: [
        {
          sku: '5706659',
          variations: [
            {
              name: 'Portable_Audio:Series',
              value: 'AirPods Pro',
            },
          ],
        },
        {
          sku: '6083595',
          variations: [
            {
              name: 'Portable_Audio:Series',
              value: 'AirPods with Wireless Charging Case',
            },
          ],
        },
        {
          sku: '6084400',
          variations: [
            {
              name: 'Portable_Audio:Series',
              value: 'AirPods with Charging Case',
            },
          ],
        },
      ],
      aspectRatio: null,
      screenFormat: null,
      lengthInMinutes: null,
      mpaaRating: null,
      plot: null,
      studio: null,
      theatricalReleaseDate: null,
      description: null,
      manufacturer: 'Apple',
      modelNumber: 'MWP22AM/A',
      images: [
        {
          rel: 'Front_Zoom',
          unitOfMeasure: 'pixels',
          width: '917',
          height: '1000',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sd.jpg',
          primary: true,
        },
        {
          rel: 'Front_Thumbnail',
          unitOfMeasure: 'pixels',
          width: '54',
          height: '59',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_s.gif',
          primary: false,
        },
        {
          rel: 'Front_Large',
          unitOfMeasure: 'pixels',
          width: '147',
          height: '160',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sb.jpg',
          primary: false,
        },
        {
          rel: 'Front_Medium',
          unitOfMeasure: 'pixels',
          width: '70',
          height: '76',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659fp.gif',
          primary: false,
        },
        {
          rel: 'Front_Standard',
          unitOfMeasure: 'pixels',
          width: '459',
          height: '500',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sa.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_12',
          unitOfMeasure: 'pixels',
          width: '500',
          height: '425',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv12a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_11',
          unitOfMeasure: 'pixels',
          width: '388',
          height: '500',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv11a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_16',
          unitOfMeasure: 'pixels',
          width: '500',
          height: '500',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv16a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_15',
          unitOfMeasure: 'pixels',
          width: '500',
          height: '500',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv15a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_14',
          unitOfMeasure: 'pixels',
          width: '339',
          height: '500',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv14a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_13',
          unitOfMeasure: 'pixels',
          width: '500',
          height: '297',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv13a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_11',
          unitOfMeasure: 'pixels',
          width: '776',
          height: '1000',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv11d.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_12',
          unitOfMeasure: 'pixels',
          width: '1000',
          height: '850',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv12d.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_13',
          unitOfMeasure: 'pixels',
          width: '1000',
          height: '594',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv13d.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Standard_17',
          unitOfMeasure: 'pixels',
          width: '500',
          height: '460',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv17a.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_14',
          unitOfMeasure: 'pixels',
          width: '677',
          height: '1000',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv14d.jpg',
          primary: false,
        },
        {
          rel: 'Front_Detail',
          unitOfMeasure: 'pixels',
          width: '105',
          height: '114',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sc.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_15',
          unitOfMeasure: 'pixels',
          width: '1000',
          height: '1000',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv15d.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_16',
          unitOfMeasure: 'pixels',
          width: '1000',
          height: '1000',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv16d.jpg',
          primary: false,
        },
        {
          rel: 'Alt_View_Zoom_17',
          unitOfMeasure: 'pixels',
          width: '1000',
          height: '920',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv17d.jpg',
          primary: false,
        },
      ],
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sa.jpg',
      largeFrontImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sd.jpg',
      mediumImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659fp.gif',
      thumbnailImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_s.gif',
      largeImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sb.jpg',
      alternateViewsImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv11d.jpg',
      angleImage: null,
      backViewImage: null,
      energyGuideImage: null,
      leftViewImage: null,
      accessoriesImage: null,
      remoteControlImage: null,
      rightViewImage: null,
      topViewImage: null,
      albumTitle: 'AirPods Pro',
      artistName: null,
      artistId: null,
      originalReleaseDate: null,
      parentalAdvisory: null,
      mediaCount: null,
      monoStereo: null,
      studioLive: null,
      condition: 'New',
      inStorePickup: true,
      friendsAndFamilyPickup: true,
      homeDelivery: false,
      quantityLimit: 3,
      fulfilledBy: null,
      members: [],
      bundledIn: [],
      albumLabel: null,
      genre: null,
      color: 'White',
      depth: null,
      dollarSavings: 50.0,
      percentSavings: '20.0',
      tradeInValue: '',
      height: null,
      orderable: 'Available',
      weight: null,
      shippingWeight: 0.45,
      width: null,
      warrantyLabor: '1 Year',
      warrantyParts: '1 Year',
      softwareAge: null,
      softwareGrade: null,
      platform: null,
      numberOfPlayers: null,
      softwareNumberOfPlayers: null,
      esrbRating: null,
      longDescription:
        "Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you. A more customizable fit for all-day comfort. Sweat- and water-resistant.&#185; All in a super light, in-ear headphone that's easy to set up with all your Apple devices.&#178;",
      includedItemList: [
        {
          includedItem: 'Apple AirPods Pro',
        },
        {
          includedItem: 'Lightning to USB-C Cable',
        },
        {
          includedItem: 'Wireless Charging Case',
        },
        {
          includedItem: 'Silicone ear tips (three sizes)',
        },
        {
          includedItem: 'Documentation',
        },
      ],
      marketplace: null,
      listingId: null,
      sellerId: null,
      shippingRestrictions: null,
      proposition65WarningMessage: null,
      proposition65WarningType: '01',
    },
  ],
};

const singleProductViewExpectedTransformation = {
  currentPrice: 199.99,
  description:
    "Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you. A more customizable fit for all-day comfort. Sweat- and water-resistant.&#185; All in a super light, in-ear headphone that's easy to set up with all your Apple devices.&#178;",
  images: [
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659cv11d.jpg',
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sa.jpg',
  ],
  modelNumber: 'MWP22AM/A',
  name: 'Apple - AirPods Pro - White',
  rating: 4,
  ratingCount: 30118,
  regularPrice: 249.99,
  sku: 5706659,
};
const searchViewData = {
  from: 1,
  to: 2,
  currentPage: 1,
  total: 2,
  totalPages: 1,
  queryTime: '0.056',
  totalTime: '0.061',
  partial: false,
  canonicalUrl:
    '/v1/products((search="shrek"&search="20th"&search="anniversary"&search="4K"))?format=json&apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
  products: [
    {
      sku: 6455875,
      score: null,
      productId: null,
      name: 'Shrek [20th Anniversary Edition] [SteelBook] [Digital Copy] [4K Ultra HD Blu-ray/Blu-ray] [2001]',
      source: null,
      type: 'Movie',
      startDate: '2021-03-11',
      new: false,
      active: true,
      lowPriceGuarantee: true,
      activeUpdateDate: '2021-03-16T10:34:23',
      regularPrice: 22.99,
      salePrice: 22.99,
      clearance: false,
      onSale: false,
      planPrice: null,
      priceWithPlan: [],
      contracts: [],
      priceRestriction: null,
      priceUpdateDate: '2021-03-16T10:34:23',
      digital: false,
      preowned: false,
      carriers: [],
      planFeatures: [],
      devices: [],
      carrierPlans: [],
      technologyCode: null,
      carrierModelNumber: null,
      earlyTerminationFees: [],
      monthlyRecurringCharge: '',
      monthlyRecurringChargeGrandTotal: '',
      activationCharge: '',
      minutePrice: '',
      planCategory: null,
      planType: null,
      familyIndividualCode: null,
      validFrom: null,
      validUntil: null,
      carrierPlan: null,
      outletCenter: null,
      secondaryMarket: null,
      frequentlyPurchasedWith: [],
      accessories: [],
      relatedProducts: [],
      requiredParts: [],
      techSupportPlans: [],
      crossSell: [],
      salesRankShortTerm: null,
      salesRankMediumTerm: null,
      salesRankLongTerm: null,
      bestSellingRank: null,
      url: 'https://api.bestbuy.com/click/-/6455875/pdp',
      spin360Url: null,
      mobileUrl: 'https://api.bestbuy.com/click/-/6455875/pdp',
      affiliateUrl: null,
      addToCartUrl: 'https://api.bestbuy.com/click/-/6455875/cart',
      affiliateAddToCartUrl: null,
      linkShareAffiliateUrl: '',
      linkShareAffiliateAddToCartUrl: '',
      upc: '191329157190',
      productTemplate: 'Movies',
      categoryPath: [
        {
          id: 'cat00000',
          name: 'Best Buy',
        },
        {
          id: 'abcat0600000',
          name: 'Movies & Music',
        },
        {
          id: 'cat02015',
          name: 'Movies & TV Shows',
        },
      ],
      alternateCategories: [],
      lists: [],
      customerReviewCount: 253,
      customerReviewAverage: 4.8,
      customerTopRated: true,
      format: '4K Ultra HD Blu-ray',
      freeShipping: false,
      freeShippingEligible: false,
      inStoreAvailability: true,
      inStoreAvailabilityText: null,
      inStoreAvailabilityUpdateDate: '2021-03-16T10:34:23',
      itemUpdateDate: '2021-04-27T13:36:13',
      onlineAvailability: false,
      onlineAvailabilityText: null,
      onlineAvailabilityUpdateDate: '2021-04-27T13:36:13',
      releaseDate: '2021-05-11',
      shippingCost: '',
      shipping: [],
      shippingLevelsOfService: [],
      specialOrder: false,
      shortDescription: null,
      class: 'UHD MOVIES',
      classId: 610,
      subclass: 'UHD CHILD-FAMILY',
      subclassId: 1006,
      department: 'VIDEO/COMPACT DISC',
      departmentId: 8,
      protectionPlanTerm: 'UHD',
      protectionPlanType: null,
      protectionPlanLowPrice: '',
      protectionPlanHighPrice: '',
      buybackPlans: [],
      protectionPlans: [],
      protectionPlanDetails: [],
      productFamilies: [],
      productVariations: [
        {
          sku: '34652319',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'Blu-ray',
            },
          ],
        },
        {
          sku: '34652328',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '5291411',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '6260156',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'Blu-ray',
            },
          ],
        },
        {
          sku: '6303849',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '6455875',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: '4K Ultra HD Blu-ray / Blu-ray / SteelBook',
            },
          ],
        },
        {
          sku: '6455876',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'Blu-ray',
            },
          ],
        },
        {
          sku: '6455877',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '6455884',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: '4K Ultra HD Blu-ray / Blu-ray',
            },
          ],
        },
      ],
      aspectRatio: null,
      screenFormat: null,
      lengthInMinutes: 89,
      mpaaRating: 'PG',
      plot: "In this fully computer-animated fantasy from the creators of Antz, we follow the travails of Shrek (Mike Myers), a green ogre who enjoys a life of solitude. Living in a far away swamp, he is suddenly invaded by a hoard of fairy tale characters, such as the Big Bad Wolf, the Three Little Pigs, and Three Blind Mice, all refugees of their homes who have been shunned by the evil Lord Farquaad (John Lithgow). They want to save their homes from ruin, and enlist the help of Shrek, who is in the same situation. Shrek decides to offer Lord Farquaad a deal; he will rescue the beautiful Princess Fiona (Cameron Diaz), who is intended to be Farquaad's bride. Accompanying Shrek on his adventure is the faithful but loquacious Donkey (Eddie Murphy), who has a penchant for crooning pop songs. The two must face various obstacles in order to locate the Princess, but they find their world challenged when she reveals a dark secret that will affect the group. Shrek is based on the children's book by William Steig, and features additional voice-work by Vincent Cassel, Cody Cameron, and Kathleen Freeman.~Jason Clark",
      studio: 'Dreamworks Animated',
      theatricalReleaseDate: '2001',
      description: null,
      manufacturer: null,
      modelNumber: '46214689000',
      images: [
        {
          rel: 'Front_Original',
          unitOfMeasure: 'pixels',
          width: '1000',
          height: '477',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_so.jpg',
          primary: true,
        },
        {
          rel: 'Front_Thumbnail',
          unitOfMeasure: 'pixels',
          width: '54',
          height: '26',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_s.gif',
          primary: false,
        },
        {
          rel: 'Front_Detail',
          unitOfMeasure: 'pixels',
          width: '105',
          height: '50',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sc.jpg',
          primary: false,
        },
        {
          rel: 'Front_Standard',
          unitOfMeasure: 'pixels',
          width: '500',
          height: '239',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sa.jpg',
          primary: false,
        },
        {
          rel: 'Front_Large',
          unitOfMeasure: 'pixels',
          width: '220',
          height: '105',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sb.jpg',
          primary: false,
        },
        {
          rel: 'Front_Medium',
          unitOfMeasure: 'pixels',
          width: '70',
          height: '33',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875fp.gif',
          primary: false,
        },
      ],
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sa.jpg',
      largeFrontImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sb.jpg',
      mediumImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875fp.gif',
      thumbnailImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_s.gif',
      largeImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sb.jpg',
      alternateViewsImage: null,
      angleImage: null,
      backViewImage: null,
      energyGuideImage: null,
      leftViewImage: null,
      accessoriesImage: null,
      remoteControlImage: null,
      rightViewImage: null,
      topViewImage: null,
      albumTitle:
        'Shrek [20th Anniversary Edition] [SteelBook] [Digital Copy] [4K Ultra HD Blu-ray/Blu-ray]',
      artistName: null,
      artistId: null,
      originalReleaseDate: null,
      parentalAdvisory: null,
      mediaCount: null,
      monoStereo: null,
      studioLive: null,
      condition: 'New',
      inStorePickup: true,
      friendsAndFamilyPickup: true,
      homeDelivery: false,
      quantityLimit: 3,
      fulfilledBy: null,
      members: [],
      bundledIn: [],
      albumLabel: null,
      genre: 'Childrens and Family',
      color: null,
      depth: null,
      dollarSavings: 0.0,
      percentSavings: '0.0',
      tradeInValue: '',
      height: null,
      orderable: 'PreOrder',
      weight: null,
      shippingWeight: 0.1,
      width: null,
      warrantyLabor: null,
      warrantyParts: null,
      softwareAge: null,
      softwareGrade: null,
      platform: null,
      numberOfPlayers: null,
      softwareNumberOfPlayers: null,
      esrbRating: null,
      longDescription: null,
      includedItemList: [],
      marketplace: null,
      listingId: null,
      sellerId: null,
      shippingRestrictions: null,
      proposition65WarningMessage: null,
      proposition65WarningType: '01',
    },
    {
      sku: 6455884,
      score: null,
      productId: null,
      name: 'Shrek [20th Anniversary Edition] [Includes Digital Copy] [4K Ultra HD Blu-ray/Blu-ray] [2001]',
      source: null,
      type: 'Movie',
      startDate: '2020-10-13',
      new: false,
      active: true,
      lowPriceGuarantee: true,
      activeUpdateDate: '2021-03-16T10:17:58',
      regularPrice: 22.99,
      salePrice: 22.99,
      clearance: false,
      onSale: false,
      planPrice: null,
      priceWithPlan: [],
      contracts: [],
      priceRestriction: null,
      priceUpdateDate: '2021-03-16T10:17:58',
      digital: false,
      preowned: false,
      carriers: [],
      planFeatures: [],
      devices: [],
      carrierPlans: [],
      technologyCode: null,
      carrierModelNumber: null,
      earlyTerminationFees: [],
      monthlyRecurringCharge: '',
      monthlyRecurringChargeGrandTotal: '',
      activationCharge: '',
      minutePrice: '',
      planCategory: null,
      planType: null,
      familyIndividualCode: null,
      validFrom: null,
      validUntil: null,
      carrierPlan: null,
      outletCenter: null,
      secondaryMarket: null,
      frequentlyPurchasedWith: [],
      accessories: [],
      relatedProducts: [],
      requiredParts: [],
      techSupportPlans: [],
      crossSell: [],
      salesRankShortTerm: null,
      salesRankMediumTerm: null,
      salesRankLongTerm: null,
      bestSellingRank: null,
      url: 'https://api.bestbuy.com/click/-/6455884/pdp',
      spin360Url: null,
      mobileUrl: 'https://api.bestbuy.com/click/-/6455884/pdp',
      affiliateUrl: null,
      addToCartUrl: 'https://api.bestbuy.com/click/-/6455884/cart',
      affiliateAddToCartUrl: null,
      linkShareAffiliateUrl: '',
      linkShareAffiliateAddToCartUrl: '',
      upc: '191329160978',
      productTemplate: 'Movies',
      categoryPath: [
        {
          id: 'cat00000',
          name: 'Best Buy',
        },
        {
          id: 'abcat0600000',
          name: 'Movies & Music',
        },
        {
          id: 'cat02015',
          name: 'Movies & TV Shows',
        },
      ],
      alternateCategories: [],
      lists: [],
      customerReviewCount: 253,
      customerReviewAverage: 4.8,
      customerTopRated: true,
      format: '4K Ultra HD Blu-ray',
      freeShipping: false,
      freeShippingEligible: false,
      inStoreAvailability: true,
      inStoreAvailabilityText: null,
      inStoreAvailabilityUpdateDate: '2021-03-16T10:17:58',
      itemUpdateDate: '2021-04-23T13:45:12',
      onlineAvailability: true,
      onlineAvailabilityText: null,
      onlineAvailabilityUpdateDate: '2021-03-16T10:17:58',
      releaseDate: '2021-05-11',
      shippingCost: 3.99,
      shipping: [
        {
          ground: 3.99,
          secondDay: '',
          nextDay: '',
          vendorDelivery: '',
        },
      ],
      shippingLevelsOfService: [
        {
          serviceLevelId: 1,
          serviceLevelName: 'Standard',
          unitShippingPrice: 3.99,
        },
      ],
      specialOrder: false,
      shortDescription: null,
      class: 'UHD MOVIES',
      classId: 610,
      subclass: 'UHD CHILD-FAMILY',
      subclassId: 1006,
      department: 'VIDEO/COMPACT DISC',
      departmentId: 8,
      protectionPlanTerm: 'UHD',
      protectionPlanType: null,
      protectionPlanLowPrice: '',
      protectionPlanHighPrice: '',
      buybackPlans: [],
      protectionPlans: [],
      protectionPlanDetails: [],
      productFamilies: [],
      productVariations: [
        {
          sku: '34652319',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'Blu-ray',
            },
          ],
        },
        {
          sku: '34652328',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '5291411',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '6260156',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'Blu-ray',
            },
          ],
        },
        {
          sku: '6303849',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '6455875',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: '4K Ultra HD Blu-ray / Blu-ray / SteelBook',
            },
          ],
        },
        {
          sku: '6455876',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'Blu-ray',
            },
          ],
        },
        {
          sku: '6455877',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: 'DVD',
            },
          ],
        },
        {
          sku: '6455884',
          variations: [
            {
              name: 'Movies_and_TV_Shows:Format',
              value: '4K Ultra HD Blu-ray / Blu-ray',
            },
          ],
        },
      ],
      aspectRatio: null,
      screenFormat: null,
      lengthInMinutes: 89,
      mpaaRating: 'PG',
      plot: "In this fully computer-animated fantasy from the creators of Antz, we follow the travails of Shrek (Mike Myers), a green ogre who enjoys a life of solitude. Living in a far away swamp, he is suddenly invaded by a hoard of fairy tale characters, such as the Big Bad Wolf, the Three Little Pigs, and Three Blind Mice, all refugees of their homes who have been shunned by the evil Lord Farquaad (John Lithgow). They want to save their homes from ruin, and enlist the help of Shrek, who is in the same situation. Shrek decides to offer Lord Farquaad a deal; he will rescue the beautiful Princess Fiona (Cameron Diaz), who is intended to be Farquaad's bride. Accompanying Shrek on his adventure is the faithful but loquacious Donkey (Eddie Murphy), who has a penchant for crooning pop songs. The two must face various obstacles in order to locate the Princess, but they find their world challenged when she reveals a dark secret that will affect the group. Shrek is based on the children's book by William Steig, and features additional voice-work by Vincent Cassel, Cody Cameron, and Kathleen Freeman.~Jason Clark",
      studio: 'Dreamworks Animated',
      theatricalReleaseDate: '2001',
      description: null,
      manufacturer: null,
      modelNumber: '46215247000',
      images: [
        {
          rel: 'Front_Original',
          unitOfMeasure: 'pixels',
          width: '798',
          height: '1000',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_so.jpg',
          primary: true,
        },
        {
          rel: 'Front_Thumbnail',
          unitOfMeasure: 'pixels',
          width: '54',
          height: '68',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_s.gif',
          primary: false,
        },
        {
          rel: 'Front_Detail',
          unitOfMeasure: 'pixels',
          width: '105',
          height: '132',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sc.jpg',
          primary: false,
        },
        {
          rel: 'Front_Standard',
          unitOfMeasure: 'pixels',
          width: '399',
          height: '500',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sa.jpg',
          primary: false,
        },
        {
          rel: 'Front_Large',
          unitOfMeasure: 'pixels',
          width: '128',
          height: '160',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sb.jpg',
          primary: false,
        },
        {
          rel: 'Front_Medium',
          unitOfMeasure: 'pixels',
          width: '70',
          height: '88',
          href: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884fp.gif',
          primary: false,
        },
      ],
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sa.jpg',
      largeFrontImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sb.jpg',
      mediumImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884fp.gif',
      thumbnailImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_s.gif',
      largeImage:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sb.jpg',
      alternateViewsImage: null,
      angleImage: null,
      backViewImage: null,
      energyGuideImage: null,
      leftViewImage: null,
      accessoriesImage: null,
      remoteControlImage: null,
      rightViewImage: null,
      topViewImage: null,
      albumTitle:
        'Shrek [20th Anniversary Edition] [Includes Digital Copy] [4K Ultra HD Blu-ray/Blu-ray]',
      artistName: null,
      artistId: null,
      originalReleaseDate: null,
      parentalAdvisory: null,
      mediaCount: null,
      monoStereo: null,
      studioLive: null,
      condition: 'New',
      inStorePickup: true,
      friendsAndFamilyPickup: true,
      homeDelivery: false,
      quantityLimit: 3,
      fulfilledBy: null,
      members: [],
      bundledIn: [],
      albumLabel: null,
      genre: 'Childrens and Family',
      color: null,
      depth: null,
      dollarSavings: 0.0,
      percentSavings: '0.0',
      tradeInValue: '',
      height: null,
      orderable: 'PreOrder',
      weight: null,
      shippingWeight: 0.25,
      width: null,
      warrantyLabor: null,
      warrantyParts: null,
      softwareAge: null,
      softwareGrade: null,
      platform: null,
      numberOfPlayers: null,
      softwareNumberOfPlayers: null,
      esrbRating: null,
      longDescription: null,
      includedItemList: [],
      marketplace: null,
      listingId: null,
      sellerId: null,
      shippingRestrictions: null,
      proposition65WarningMessage: null,
      proposition65WarningType: '01',
    },
  ],
};

const searchViewExpectedTranformation = {
  total: 2,
  products: [
    {
      currentPrice: 22.99,
      description: null,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455875_sa.jpg',
      modelNumber: '46214689000',
      name: 'Shrek [20th Anniversary Edition] [SteelBook] [Digital Copy] [4K Ultra HD Blu-ray/Blu-ray] [2001]',
      rating: 4,
      ratingCount: 253,
      regularPrice: 22.99,
      sku: 6455875,
      total: 2,
    },
    {
      currentPrice: 22.99,
      description: null,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455884_sa.jpg',
      modelNumber: '46215247000',
      name: 'Shrek [20th Anniversary Edition] [Includes Digital Copy] [4K Ultra HD Blu-ray/Blu-ray] [2001]',
      rating: 4,
      ratingCount: 253,
      regularPrice: 22.99,
      sku: 6455884,
      total: 2,
    },
  ],
};

const featuredViewData = {
  metadata: {
    context: {
      canonicalUrl:
        'https://api.bestbuy.com/beta/products/mostViewed?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
    },
    resultSet: {
      count: 10,
    },
  },
  results: [
    {
      sku: '5706659',
      customerReviews: {
        averageScore: 4.7,
        count: 30119,
      },
      descriptions: {
        short:
          "Active noise cancellation for immersive sound. Transparency mode for hearing what's happening around you. Sweat- and water-resistant. And more customizable fit for all-day comfort",
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sa.jpg',
      },
      names: {
        title: 'Apple - AirPods Pro - White',
      },
      prices: {
        regular: 249.99,
        current: 199.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/5706659.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/5706659/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/5706659/cart',
      },
      rank: 1,
    },
    {
      sku: '6461348',
      customerReviews: {
        averageScore: 0.0,
        count: 0,
      },
      descriptions: {
        short:
          "AirTag is the supereasy way to keep track of and find your things. Attach one to your keys, or slip another one into your backpack. And just like that, they're on your radar in the Find My app.",
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461348_ra.jpg',
      },
      names: {
        title: 'Apple - AirTag',
      },
      prices: {
        regular: 29.0,
        current: 29.0,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6461348.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6461348/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6461348/cart',
      },
      rank: 2,
    },
    {
      sku: '6418599',
      customerReviews: {
        averageScore: 4.8,
        count: 2826,
      },
      descriptions: {
        short:
          "Apple's thinnest and lightest notebook gets supercharged with the Apple M1 chip",
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418599_sa.jpg',
      },
      names: {
        title:
          'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD (Latest Model) - Gold',
      },
      prices: {
        regular: 999.99,
        current: 999.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6418599.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6418599/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6418599/cart',
      },
      rank: 3,
    },
    {
      sku: '6364253',
      customerReviews: {
        averageScore: 4.8,
        count: 47610,
      },
      descriptions: {
        short:
          '32GB internal storageLeft and right wireless Joy-Con controllers includedImproved battery life',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364253_sa.jpg',
      },
      names: {
        title: 'Nintendo - Switch 32GB Console - Gray Joy-Con',
      },
      prices: {
        regular: 299.99,
        current: 299.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6364253.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6364253/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6364253/cart',
      },
      rank: 4,
    },
    {
      sku: '6215923',
      customerReviews: {
        averageScore: 4.9,
        count: 4757,
      },
      descriptions: {
        short: 'The future of health is on your wrist.',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215923_sa.jpg',
      },
      names: {
        title:
          'Apple Watch Series 6 (GPS) 40mm (PRODUCT)RED Aluminum Case with (PRODUCT)RED Sport Band - (PRODUCT)RED',
      },
      prices: {
        regular: 399.0,
        current: 299.0,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6215923.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6215923/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6215923/cart',
      },
      rank: 5,
    },
    {
      sku: '5199701',
      customerReviews: {
        averageScore: 4.9,
        count: 6981,
      },
      descriptions: {
        short:
          'Delightfully capable. Surprisingly affordable. More function. More fun',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5199/5199701_sa.jpg',
      },
      names: {
        title:
          'Apple - 10.2-Inch iPad - Latest Model - (8th Generation) with Wi-Fi - 32GB - Space Gray',
      },
      prices: {
        regular: 329.99,
        current: 329.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/5199701.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/5199701/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/5199701/cart',
      },
      rank: 6,
    },
    {
      sku: '6420290',
      customerReviews: {
        averageScore: 4.4,
        count: 620,
      },
      descriptions: {
        short:
          'The only straightener with copper flexing plates that shape to gather hair. Use corded or cord-free. Flexing manganese copper alloy plates shape around your hair.',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420290_ra.jpg',
      },
      names: {
        title:
          'Dyson - Corrale™ straightener Special Gift Edition - Black Nickel / Fuchsia',
      },
      prices: {
        regular: 499.99,
        current: 499.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6420290.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6420290/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6420290/cart',
      },
      rank: 7,
    },
    {
      sku: '6437565',
      customerReviews: {
        averageScore: 4.8,
        count: 524,
      },
      descriptions: {
        short:
          'Massive Energy & Wild Color!  Discover new brilliance and maximum power in the Pok&#233;mon TCG: Sword & Shield&#8212;Vivid Voltage expansion as more Pok&#233;mon V appear, including the newly discovered Mythical Pok&#233;mon Zarude!',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6437/6437565_sa.jpg',
      },
      names: {
        title: 'Pokémon TCG: Sword & Shield—Vivid Voltage Sleeved Booster',
      },
      prices: {
        regular: 3.99,
        current: 3.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6437565.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6437565/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6437565/cart',
      },
      rank: 8,
    },
    {
      sku: '6401738',
      customerReviews: {
        averageScore: 4.6,
        count: 5569,
      },
      descriptions: {
        short:
          '4K UHD resolution with HDRSmart TV, web browser includedMotion Rate 120',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sa.jpg',
      },
      names: {
        title: 'Samsung - 50" Class 7 Series LED 4K UHD Smart Tizen TV',
      },
      prices: {
        regular: 399.99,
        current: 399.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6401738.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6401738/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6401738/cart',
      },
      rank: 9,
    },
    {
      sku: '6428997',
      customerReviews: {
        averageScore: 4.5,
        count: 669,
      },
      descriptions: {
        short:
          'Make the most of every day with the sleek style, performance, and all-day battery life you need in the lightest Surface Laptop, all at an exceptional value. Ultra-light and portable profile, the apps* you use every day, premium materials, and a choice of must-have colors will make this your go-to laptop.',
      },
      images: {
        standard:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428997_sa.jpg',
      },
      names: {
        title:
          'Microsoft - Surface Laptop Go - 12.4" Touch-Screen - Intel 10th Generation Core i5 - 8GB Memory - 128GB Solid State Drive - Sandstone',
      },
      prices: {
        regular: 699.99,
        current: 649.99,
      },
      links: {
        product:
          'https://api.bestbuy.com/v1/products/6428997.json?apiKey=mPlbr5GXMVkagVgzwT7T2V5X',
        web: 'https://api.bestbuy.com/click/-/6428997/pdp',
        addToCart: 'https://api.bestbuy.com/click/-/6428997/cart',
      },
      rank: 10,
    },
  ],
};

const featuredViewExpectedTransformation = [
  {
    currentPrice: 199.99,
    description:
      "Active noise cancellation for immersive sound. Transparency mode for hearing what's happening around you. Sweat- and water-resistant. And more customizable fit for all-day comfort",
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sa.jpg',
    name: 'Apple - AirPods Pro - White',
    rating: 4,
    ratingCount: 30119,
    regularPrice: 249.99,
    sku: '5706659',
  },
  {
    currentPrice: 29,
    description:
      "AirTag is the supereasy way to keep track of and find your things. Attach one to your keys, or slip another one into your backpack. And just like that, they're on your radar in the Find My app.",
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461348_ra.jpg',
    name: 'Apple - AirTag',
    rating: 0,
    ratingCount: 0,
    regularPrice: 29,
    sku: '6461348',
  },
  {
    currentPrice: 999.99,
    description:
      "Apple's thinnest and lightest notebook gets supercharged with the Apple M1 chip",
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418599_sa.jpg',
    name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD (Latest Model) - Gold',
    rating: 4,
    ratingCount: 2826,
    regularPrice: 999.99,
    sku: '6418599',
  },
  {
    currentPrice: 299.99,
    description:
      '32GB internal storageLeft and right wireless Joy-Con controllers includedImproved battery life',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364253_sa.jpg',
    name: 'Nintendo - Switch 32GB Console - Gray Joy-Con',
    rating: 4,
    ratingCount: 47610,
    regularPrice: 299.99,
    sku: '6364253',
  },
  {
    currentPrice: 299,
    description: 'The future of health is on your wrist.',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215923_sa.jpg',
    name: 'Apple Watch Series 6 (GPS) 40mm (PRODUCT)RED Aluminum Case with (PRODUCT)RED Sport Band - (PRODUCT)RED',
    rating: 4,
    ratingCount: 4757,
    regularPrice: 399,
    sku: '6215923',
  },
  {
    currentPrice: 329.99,
    description:
      'Delightfully capable. Surprisingly affordable. More function. More fun',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5199/5199701_sa.jpg',
    name: 'Apple - 10.2-Inch iPad - Latest Model - (8th Generation) with Wi-Fi - 32GB - Space Gray',
    rating: 4,
    ratingCount: 6981,
    regularPrice: 329.99,
    sku: '5199701',
  },
  {
    currentPrice: 499.99,
    description:
      'The only straightener with copper flexing plates that shape to gather hair. Use corded or cord-free. Flexing manganese copper alloy plates shape around your hair.',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420290_ra.jpg',
    name: 'Dyson - Corrale™ straightener Special Gift Edition - Black Nickel / Fuchsia',
    rating: 4,
    ratingCount: 620,
    regularPrice: 499.99,
    sku: '6420290',
  },
  {
    currentPrice: 3.99,
    description:
      'Massive Energy & Wild Color!  Discover new brilliance and maximum power in the Pok&#233;mon TCG: Sword & Shield&#8212;Vivid Voltage expansion as more Pok&#233;mon V appear, including the newly discovered Mythical Pok&#233;mon Zarude!',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6437/6437565_sa.jpg',
    name: 'Pokémon TCG: Sword & Shield—Vivid Voltage Sleeved Booster',
    rating: 4,
    ratingCount: 524,
    regularPrice: 3.99,
    sku: '6437565',
  },
  {
    currentPrice: 399.99,
    description:
      '4K UHD resolution with HDRSmart TV, web browser includedMotion Rate 120',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sa.jpg',
    name: 'Samsung - 50" Class 7 Series LED 4K UHD Smart Tizen TV',
    rating: 4,
    ratingCount: 5569,
    regularPrice: 399.99,
    sku: '6401738',
  },
  {
    currentPrice: 649.99,
    description:
      'Make the most of every day with the sleek style, performance, and all-day battery life you need in the lightest Surface Laptop, all at an exceptional value. Ultra-light and portable profile, the apps* you use every day, premium materials, and a choice of must-have colors will make this your go-to laptop.',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428997_sa.jpg',
    name: 'Microsoft - Surface Laptop Go - 12.4" Touch-Screen - Intel 10th Generation Core i5 - 8GB Memory - 128GB Solid State Drive - Sandstone',
    rating: 4,
    ratingCount: 669,
    regularPrice: 699.99,
    sku: '6428997',
  },
];
