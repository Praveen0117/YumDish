import ResturantCard  from "./ResturantCard"
import { useEffect, useState } from "react";

const resList = [
    {
        "info": {
          "id": "11091",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Attapur",
          "areaName": "Attapur",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4,
          "parentId": "721",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 57,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-attapur-hyderabad-11091",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "360967",
          "name": "Wow! Momo",
          "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
          "locality": "Vishwa Bhawan",
          "areaName": "Himayath Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Tibetan",
            "Healthy Food",
            "Asian",
            "Chinese",
            "Snacks",
            "Continental",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "1776",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 66,
            "lastMileTravel": 8.2,
            "serviceability": "SERVICEABLE",
            "slaString": "65-70 mins",
            "lastMileTravelString": "8.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/wow-momo-vishwa-bhawan-himayath-nagar-hyderabad-360967",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "6994",
          "name": "Santosh Dhaba Exclusive",
          "cloudinaryImageId": "jllcesio37olflwnvter",
          "locality": "Abids",
          "areaName": "Koti",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Italian",
            "Mexican",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "8784",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 6.6,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "6.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/santosh-dhaba-exclusive-abids-koti-hyderabad-6994",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "28108",
          "name": "Al Rabea Al Arabi Cafeteria",
          "cloudinaryImageId": "jnzmscxd37rbjmgciwt5",
          "locality": "Mehdipatnam",
          "areaName": "Mehdipatnam",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Arabian",
            "Lebanese"
          ],
          "avgRating": 4.4,
          "parentId": "7582",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 4.3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/al-rabea-al-arabi-cafeteria-mehdipatnam-hyderabad-28108",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "52631",
          "name": "McDonald's",
          "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
          "locality": "Namishree Mantra Mall, Upperpally village",
          "areaName": "Rambagh Colony",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "630",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 02:45:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-namishree-mantra-mall-upperpally-village-rambagh-colony-hyderabad-52631",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "30253",
          "name": "Agra Sweets Banjara",
          "cloudinaryImageId": "nav4ebkoxrwlladx7a5m",
          "locality": "Utkoor- Mogdumpur road",
          "areaName": "Rambagh Colony",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Sweets",
            "Desserts",
            "Chaat",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "34",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/agra-sweets-banjara-utkoor-mogdumpur-road-rambagh-colony-hyderabad-30253",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "9296",
          "name": "Subway",
          "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
          "locality": "Humayun Nagar",
          "areaName": "Mehdipatnam",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.8,
          "parentId": "2",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 02:45:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-humayun-nagar-mehdipatnam-hyderabad-9296",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "140111",
          "name": "Imperial Multi-Cusine Restaurant",
          "cloudinaryImageId": "yeednzto1jusnnhswke0",
          "locality": "Tolichowki",
          "areaName": "Tolichowki",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Indian",
            "Kebabs",
            "Tandoor"
          ],
          "avgRating": 4.3,
          "parentId": "19254",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 54,
            "lastMileTravel": 4.9,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "4.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-tolichowki-hyderabad-140111",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "25251",
          "name": "Meridian Restaurant",
          "cloudinaryImageId": "cxvuxxwpkicbqo3nkqiy",
          "locality": "Panjagutta",
          "areaName": "Panjagutta",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Kebabs"
          ],
          "avgRating": 4.3,
          "parentId": "19276",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 8.3,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/meridian-restaurant-panjagutta-hyderabad-25251",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "3324",
          "name": "Srikanya",
          "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
          "locality": "Kondapur",
          "areaName": "Punjagutta",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Andhra",
            "Seafood"
          ],
          "avgRating": 4.3,
          "parentId": "7317",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 8,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "8.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 15:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/srikanya-kondapur-punjagutta-hyderabad-3324",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "9276",
          "name": "Kinara Grand",
          "cloudinaryImageId": "fe8291a4d9ac30500ed2898121bbe623",
          "locality": "Attapur",
          "areaName": "Langar Houz",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Chinese"
          ],
          "avgRating": 4.2,
          "parentId": "8469",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kinara-grand-attapur-langar-houz-hyderabad-9276",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "160128",
          "name": "KS Bakers",
          "cloudinaryImageId": "6127cb288329ad1c9e988276914d48ad",
          "locality": "Somi Reddy Nagar",
          "areaName": "Attapur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Bakery",
            "Pizzas",
            "Desserts",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4.1,
          "parentId": "574",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 22:45:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                "shortDescription": "Perfect Cake Delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                      "shortDescription": "Perfect Cake Delivery"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/ks-bakers-somi-reddy-nagar-attapur-hyderabad-160128",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "228215",
          "name": "Cafe Niloufer Premium Lounge",
          "cloudinaryImageId": "8407ef45d6d2283bf18037c3619cb733",
          "locality": "Ivine Banjara Hno8-2",
          "areaName": "Banjara Hills",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Bakery",
            "Beverages",
            "Snacks",
            "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "392382",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 56,
            "lastMileTravel": 10.4,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "10.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/cafe-niloufer-premium-lounge-ivine-banjara-hno8-2-banjara-hills-hyderabad-228215",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "376914",
          "name": "Theobroma",
          "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
          "locality": "Central Zone",
          "areaName": "Somajiguda & Khairtabad",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "1040",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 7.9,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "7.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 22:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                "shortDescription": "Perfect Cake Delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                      "shortDescription": "Perfect Cake Delivery"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-central-zone-somajiguda-and-khairtabad-hyderabad-376914",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "156138",
          "name": "The Good Bowl",
          "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
          "locality": "Mehdipatnam FC",
          "areaName": "Humayun Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "parentId": "7918",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 40,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-08 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-mehdipatnam-fc-humayun-nagar-hyderabad-156138",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "65483",
          "name": "Istah - The Mediterranean Way",
          "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
          "locality": "Mahatee Niketan Apartments",
          "areaName": "Himayath Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Mediterranean",
            "Snacks",
            "Biryani",
            "Grill",
            "Kebabs",
            "Arabian",
            "Lebanese",
            "Beverages",
            "Desserts",
            "Italian",
            "Turkish"
          ],
          "avgRating": 4.3,
          "parentId": "3518",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 59,
            "lastMileTravel": 8.8,
            "serviceability": "SERVICEABLE",
            "slaString": "55-60 mins",
            "lastMileTravelString": "8.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "OnlyOnSwiggy",
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-mahatee-niketan-apartments-himayath-nagar-hyderabad-65483",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "79706",
          "name": "Shah Ghouse Hotel & Restaurant",
          "cloudinaryImageId": "ggbuknqzqc4qoqfnl2cr",
          "locality": "Opp. Green Garden Function Hall",
          "areaName": "Charminar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Chinese",
            "Mughlai",
            "Tandoor"
          ],
          "avgRating": 4.2,
          "parentId": "19271",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 6.3,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "6.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/shah-ghouse-hotel-and-restaurant-opp-green-garden-function-hall-charminar-hyderabad-79706",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "358725",
          "name": "Lucky Restaurant",
          "cloudinaryImageId": "zoecoxnubcvdley21ybs",
          "locality": "Ameerpet",
          "areaName": "Jubilee Hills",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "Tandoor"
          ],
          "avgRating": 4,
          "parentId": "293683",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 10.3,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "10.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/lucky-restaurant-ameerpet-jubilee-hills-hyderabad-358725",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "59643",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
          "locality": "AC guards Rd.",
          "areaName": "Redhills",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 05:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1000",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-ac-guards-rd-redhills-hyderabad-59643",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "193571",
          "name": "The Bowl Company",
          "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
          "locality": "Mahatee Niketan Apartments",
          "areaName": "Himayath Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pan-Asian",
            "Continental",
            "North Indian",
            "Desserts",
            "American",
            "Asian",
            "Beverages",
            "Biryani",
            "Chinese",
            "European",
            "Grill",
            "Hyderabadi",
            "Indian",
            "Italian",
            "Kebabs",
            "Lucknowi",
            "Mediterranean",
            "Mexican",
            "Mughlai",
            "Oriental",
            "Pastas",
            "Punjabi",
            "Raja"
          ],
          "avgRating": 4.3,
          "parentId": "4317",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 61,
            "lastMileTravel": 8.8,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "8.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-03-09 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "OnlyOnSwiggy",
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-bowl-company-mahatee-niketan-apartments-himayath-nagar-hyderabad-193571",
          "type": "WEBLINK"
        }
      }
]

const Body = () => {

    const [searchText, setSearchTect] = useState("")
    const filteredResList = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

    useEffect( () => {
      fetchData()
    })
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const  json = await data.json();

      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }

    return(
        <div className="body">
          <div className="">
            <div>
                <input type="text" placeholder="Search"  className="border border-solid border-blue-400 m-10 w-80 h-10" value={searchText} onChange={(e) => setSearchTect(e.target.value)} />
                <button className= " h-10 w-40 m-4 border border-solid border-blue-500 bg-blue-300 rounded-lg" >Search</button> 
            
            
            <button className="h-10 w-40 m-4 border border-solid border-lime-600 bg-lime-200 rounded-lg" type="button" onClick={() => {
                const filteredList = resList.filter(
                  (res) => res.info.avgRating > 4
                ); setSearchTect(filteredList) 
              }}>Top Rated</button>

            </div>
              
              <div className="flex flex-wrap">
                  {filteredResList.map(restaruant => <ResturantCard key={restaruant.info.id} resData={restaruant} />)}
                  
              </div>
          </div>
          
        </div>
        
    )
}

export default Body