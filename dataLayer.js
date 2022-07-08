/*

Below is a sample ecommerce event driven data layer that can be used as a starter template. Please don't remove this note. 
Credits: Ritesh Gupta
Site: https://thelearningproject.in
version: v1.1

*/ 

// Page Level Data Layer 
                // Declaring the dataLayer object

                window.dataLayer = window.dataLayer || [];

                //Setting only Page Level variables

                    window.dataLayer.push({
                        "event":"Page Loaded",
                            "page":{
                            "pageInfo":{
                                "pageName": "web:profile-center",
                                "pageURL":  "www/profile/center",
                                "siteDomain": "web",
                            }
                        },
                        "category":{
                            "siteSection": "web",
                            "siteSubSection1": "profile center",
                            "siteSubSection2": " ",
                            "siteSubSection3": " ",
                            "siteSubSection4": " ",
                            "siteSubSection5": " ",
                        },
                        "userInfo":{
                            "userName":"ABCDEDFER",//set to the username 
                            "isPharmacyUser":true, // false
                            "wellnessID":544343434, // set to the wellness number 
                            "wellnessTier": "bronze", //gold, silver, platinum
                            "refillPrescriptions": 2, // number of prescriptions eligible for refill
                            "bonusCash": 5 // number of prescriptions eligible for refill
                        },
                        "profile":{
                            "incompleteSections" : "mail|mobile",
                            "gender" : "male",
                            "isFavStoreSelected" : true,
                        }
                    });

                    // Setting user object - sign up (wellness)

                    window.dataLayer.push({
                        "event":"Sign up",
                        "userInfo":{
                            "userName":" ",//set to the username if applicable
                            "isPharmacyUser":false, // false
                            "wellnessID":544343434, // set to the wellness number 
                            "wellnessTier": "bronze", //gold, silver, platinum
                           },
                        });

                        // Setting user object - sign up (pharmacy)

                        window.dataLayer.push({
                            "event":"Sign up",
                            "userInfo":{
                                "userName":"ed2343ieiew92930203",//set to the username if applicable
                                "isPharmacyUser":true, // false
                                "wellnessID":544343434, // set to the wellness number 
                                "wellnessTier": "bronze", //gold, silver, platinum
                               },
                            });

                        // Setting user object - sign in

                    window.dataLayer.push({
                        "event":"Sign In",
                        "userInfo":{
                            "userName":"ed2343ieiew92930203",//set to the username 
                            "isPharmacyUser":true, // false
                            "wellnessID":544343434, // set to the wellness number 
                            "wellnessTier": "bronze", //gold, silver, platinum
                            "refillPrescriptions": 2, // number of prescriptions eligible for refill
                            "bonusCash": 5 // number of prescriptions eligible for refill
                           },
                        });


                    // Setting Product Specific Variables - PROD View

                    window.dataLayer.push({
                        "event":"Product Viewed",
                        "step":"product",
                        "product":[{
                            "productFindingMethod": "search", // Product Finding method
                            "productInfo": {
                                "productID":"0411910",
                                "productName":"Glad Strong Quick Tie Large Trash Bags",
                                "sku": "0411910",
                                "stockStatus": "available"
                                },
                              }
                            ]
                        });

                        // Setting CART Specific Variables - CART Add

                    window.dataLayer.push({
                        "event":"Product Added",
                        "step": "add",
                        "product":[
                            {
                                "productFindingMethod": "Search", // Product Finding method
                                "quantity": 5, // Potential units
                                "unitPrice": 10.87, // Potential revenue
                                    "productInfo":{
                                       "productID":"0411910",  // parent
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910" // child
                                    }
                              }
                            ]
                        });

                        // Setting CART Specific Variables - CART Add but via Visitor Recommendation

                    window.dataLayer.push({
                        "event":"Product Added",
                        "step": "add",
                        "product":[
                            {
                                "productFindingMethod": "Visitor Recommendation", // Product Finding method
                                "productPosition": 3, // Position of the Product in the carousel
                                "quantity": 5, // Potential units
                                "sellingPrice": 10.87, // Potential revenue
                                    "productInfo":{
                                       "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                              }
                            ]
                        });

                        // Setting CART Specific Variables - CART Add but via Bonus Cash 

                    window.dataLayer.push({
                        "event":"Product Added",
                        "step": "add",
                        "product":[
                            {
                                "productFindingMethod": "Bonus Cash", // Product Finding method
                                "productPosition": 3, // Position of the Product in the carousel
                                "quantity": 5, // Potential units
                                "sellingPrice": 10.87, // Potential revenue
                                    "productInfo":{
                                       "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                              }
                            ]
                        });

                        // Setting CART Specific Variables - CART Add but via Load 2 Card

                    window.dataLayer.push({
                        "event":"Product Added",
                        "step": "add",
                        "product":[
                            {
                                "productFindingMethod": "Load 2 Card", // Product Finding method
                                "productPosition": 3, // Position of the Product in the carousel
                                "quantity": 5, // Potential units
                                "sellingPrice": 10.87, // Potential revenue
                                    "productInfo":{
                                       "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                              }
                            ]
                        });

                         // Setting CART Specific Variables - CART Add but via Wishlist: Individual

                    window.dataLayer.push({
                        "event":"Product Added",
                        "step": "add",
                        "product":[
                            {
                                "productFindingMethod": "Wish List: Individual", // Product Finding method
                                "productPosition": 3, // Position of the Product in the carousel
                                "quantity": 5, // Potential units
                                "sellingPrice": 10.87, // Potential revenue
                                    "productInfo":{
                                       "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                              }
                            ]
                        });

                        // Setting CART Specific Variables - CART Add but via Wishlist: Multiple

                    window.dataLayer.push({
                        "event":"Product Added",
                        "step": "add",
                        "product":[
                            {
                                "productFindingMethod": "Wish List: Multiple", // Product Finding method
                                "productPosition": 3, // Position of the Product in the carousel
                                "quantity": 5, // Potential units
                                "sellingPrice": 10.87, // Potential revenue
                                    "productInfo":{
                                       "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                              }
                            ]
                        });
                        // Move to Wish List

                    window.dataLayer.push({
                        "event":"Wishlist Add",
                        "product":[
                            {
                                "quantity": 1,
                                "sellingPrice": 10.87,
                                    "productInfo":{
                                        "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                            }
                            ]
                        });

                        // Copy to Wish List

                    window.dataLayer.push({
                        "event":"Wishlist Copy",
                        "product":[
                            {
                                "quantity": 1,
                                "sellingPrice": 10.87,
                                    "productInfo":{
                                        "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                            }
                            ]
                        });
                        
                         // Setting CART Specific Variables - CART Viewed

                    window.dataLayer.push({
                        "event":"Cart Viewed",
                        "step": "cart",
                        "product":[
                            {
                                "quantity": 1,
                                "sellingPrice": 10.87,
                                    "productInfo":{
                                        "sku": "0411910",
                                        "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "productURL":"<product URL>",
                                        "imageURL":"<image URL>"
                                    }
                                }
                            ]
                        });

                         // Setting CART Specific Variables - CART Remove

                    window.dataLayer.push({
                        "event":"Product Removed",
                        "product":[
                            {
                                "quantity": 1,
                                "sellingPrice": 10.87,
                                    "productInfo":{
                                        "productID":"0411910",
                                        "productName":"Glad Strong Quick Tie Large Trash Bags",
                                        "sku": "0411910"
                                    }
                            }
                            ]
                        });

                        // Visitor clicking and using Bonus Cash 

                        window.dataLayer.push({
                            "event":"Bonus Component",
                            "cart":{
                                "isBonusCash" : true,
                                "bonusAmountApplied" : 56.23
                                },
                            });

                        // Visitor clicking and Applying Discount Code  

                        window.dataLayer.push({
                            "event":"Discount Component",
                            "cart":{
                                "isDiscountCode" : true,
                                "discountApplied" : "UNIQUE50",
                               },
                            });

                        // Visitor landing on Shipping page  
                            
                        window.dataLayer.push({
                            "event": "Checkout Started",
                            "step" : "shipping",
                            "cart": {
                                "item": [{
                                    "quantity": 3,
                                    "productInfo": {
                                    "sku": "0903343",
                                    "productID": "0903343"
                                    }
                                },
                                {
                                    "quantity": 5,
                                    "productInfo": {
                                    "sku": "WB2211-A",
                                    "productID": "WB2211"
                                    }
                                },
                                {
                                    "quantity": 2,
                                    "productInfo": {
                                    "sku": "CSIC2018",
                                    "productID": "CSIC2018"
                                    }
                                }
                                ]
                             }
                            });

                            // Visitor landing on Billing page  
                            
                        window.dataLayer.push({
                            "event": "Checkout Started",
                            "step" : "billing",
                            "cart": {
                                "isDiscountCode": true,
                                "discountCode": "UNIQUE50",
                                "item": [{
                                    "quantity": 3,
                                    "productInfo": {
                                    "sku": "0903343",
                                    "productID": "0903343",
                                    "productURL":"<product URL>", // seperate eVar
                                    "imageURL":"<image URL>", // sepearte eVar
                                    }
                                },
                                {
                                    "quantity": 5,
                                    "productInfo": {
                                    "sku": "WB2211-A",
                                    "productID": "WB2211"
                                    }
                                },
                                {
                                    "quantity": 2,
                                    "productInfo": {
                                    "sku": "CSIC2018",
                                    "productID": "CSIC2018"
                                    }
                                }
                                ]
                             }
                            });

                            // Visitor landing on Confirmation page

                        window.dataLayer.push({
                        "event": "Order Placed",
                        "step" : "confirmation",
                        "transaction": {
                            "transactionID": "OSMA0876565433",
                            "shipping" : "express", 
                            "orderType": "authenticated regular",
                            "total": {
                            "currency": "USD",
                            "salesTax": 12.98,
                            "shipping": 45.94,
                            "discount": 32.12,
                            },
                            "profile": {
                            "address": {
                                "stateProvince": "WI",
                                "postalCode": "53533",
                            }
                            },
                            // Collection of Payment Objects
                            "payment": [{
                                "paymentMethod": "Gift Card",
                                "paymentAmount": "100.00"
                            },
                            {
                                "paymentMethod": "Amex",
                                "paymentAmount": "160.28"
                            }
                            ],
                            // Collection of Item Objects
                            "item": [{
                                "quantity": 3,
                                "productInfo": {
                                "sku": "HC30ABJ786-XL-GRN",
                                "productID": "HC30ABJ786",
                                "productName":"Emergen C Daily Immune Support Fizzy Drink Mix"
                                },
                                "price": {
                                "sellingPrice": "55.00"
                                }
                            },
                            {
                                "quantity": 1,
                                "productInfo": {
                                "sku": "WB2211-A",
                                "productID": "WB2211",
                                "isBackOrdered": true
                                },
                                "price": {
                                "sellingPrice": "82.30"
                                }
                            }
                            ]
                        }
                        });

                    // WEEKLY AD TRACKING 

                    // Please refer to the Global Page Load variables section for declaring common page level variables 
                    // that need to be identified on each page load 

                            // When the visitor clicks open a weekly 
                            // ad from the given options 

                            window.dataLayer.push({
                                "event":"Weekly Ad View",
                                "weeklyAd":{
                                    "zipCode": 10017, 
                                    "circularClicked": "Nov 28 - Nov 30"
                                    }
                                });

                            
                            // When the visitor views an ad in the weekly ad, pass the brand name, 
                            //the offer name and the page that the visitor was on 

                                window.dataLayer.push({
                                    "event":"Weekly Ad Detail",
                                    "adDetails":{
                                        "brandName": "natures truth vitmains and supplements" ,
                                        "offerName": "buy 1 get 1 free",
                                        "pageNumber": 2
                                        }
                                    });

                           // When the visitor clicks on the Find a Store button in the ad 
                           // that he is viewing

                                window.dataLayer.push({
                                    "event":"Find a Store",
                                    "adDetails":{
                                        "brandName": "natures truth vitmains and supplements" ,
                                        "offerName": "buy 1 get 1 free"
                                        }
                                    });

                            // When the visitor clicks on the Add To Shopping button in the ad 
                           // that he is viewing

                                window.dataLayer.push({
                                    "event":"Add to Shopping",
                                    "adDetails":{
                                        "brandName": "natures truth vitmains and supplements" ,
                                        "offerName": "buy 1 get 1 free"
                                        }
                                    });

                            // When the visitor clicks on the Social Share button in the ad 
                           // that he is viewing

                                window.dataLayer.push({
                                    "event":"Share Social",
                                    "adDetails":{
                                        "brandName": "natures truth vitmains and supplements" ,
                                        "offerName": "buy 1 get 1 free"
                                        }
                                    });  
                            
                            // When the visitor clicks on the Send button in the ad 
                           // after filling in an email ID 

                                window.dataLayer.push({
                                    "event":"Share Email",
                                    "adDetails":{
                                        "brandName": "natures truth vitmains and supplements" ,
                                        "offerName": "buy 1 get 1 free"
                                        }
                                    });
                            
                            // When the visitor clicks on the print coupon button 
                            // in the ad that he is viewing

                                window.dataLayer.push({
                                    "event":"Print Coupon",
                                    "adDetails":{
                                        "brandName": "natures truth vitmains and supplements" ,
                                        "offerName": "buy 1 get 1 free"
                                        }
                                    });   
                            
                            // When the visitor views a widget in the weekly ad, 
                            //pass the zip code, the circular details and the widget selected

                                window.dataLayer.push({
                                    "event":"Widget Clicked",
                                    "weeklyAd":{
                                        "zipCode": 10017, 
                                        "circularClicked": "Nov 28 - Nov 30",
                                        "widgetSelected" : "my location"
                                        }
                                    });

                            // When the visitor views a category from the available categories 
                            // in the weekly ad, 
                            //pass the zip code, the circular details and the category selected

                                window.dataLayer.push({
                                    "event":"Category Clicked",
                                    "weeklyAd":{
                                        "zipCode": 10017, 
                                        "circularClicked": "Nov 28 - Nov 30",
                                        "widgetSelected" : "category",
                                        "categorySelected" : "beauty"
                                        }
                                    });

                                // Logging the dataLayer value to check if data layer is correct
                                console.log(window.dataLayer);    

                                // Photo Site tracking

                                //Users clicking on the right nav and selecting one of the options
                                window.dataLayer.push({
                                    "event":"photo: drop down click",
                                    "photoTracking":{
                                        "itemSelected": "standard prints" 
                                        }
                                    });

                                      //Users clicking on the banner links presented to them
                                window.dataLayer.push({
                                    "event":"photo: banner click",
                                    "photoTracking":{
                                        "bannerSelected": "photo:1231" // whatever banner name is decided by business 
                                        }
                                    });

                                    // Setting Product Specific Variables - PROD View - Photo Site

                                    window.dataLayer.push({
                                        "event":"Product Viewed",
                                        "step":"product",
                                        "product":[{
                                            "productInfo": {
                                                "productID":"1038532",
                                                "productName":"5 by 7 Folded Card",
                                                },
                                            }
                                            ]
                                        });
                                    
                                        // Setting CART Specific Variables - CART Add - Photo Site

                                    window.dataLayer.push({
                                        "event":"Product Added",
                                        "step": "add",
                                        "product":[
                                            {
                                                "quantity": 5, // Potential units
                                                "unitPrice": 10.87, // Potential revenue
                                                    "productInfo":{
                                                    "productID":"1038532",
                                                    "productName":"5 by 7 Folded Card",
                                                    }
                                            }
                                            ]
                                        });

                                    // Setting CART Specific Variables - CART Viewed - Photo Site

                                        window.dataLayer.push({
                                            "event":"Cart Viewed",
                                            "step": "cart",
                                            "product":[
                                                {
                                                    "quantity": 1,
                                                    "sellingPrice": 10.87,
                                                        "productInfo":{
                                                            "productID":"1038532",
                                                            "productName":"5 by 7 Folded Card",
                                                        }
                                                    }
                                                ]
                                            });

                                            // Setting CART Specific Variables - CART Remove

                                        window.dataLayer.push({
                                            "event":"Product Removed",
                                            "product":[
                                                {
                                                    "quantity": 1,
                                                    "sellingPrice": 10.87,
                                                    "productInfo":{
                                                        "productID":"1038532",
                                                        "productName":"5 by 7 Folded Card",
                                                    }
                                                }
                                                ]
                                            });

                                            // Visitor landing on shipping page

                                        window.dataLayer.push({
                                            "event": "Checkout Started",
                                            "step" : "shipping",
                                            "cart": {
                                                "item": [{
                                                    "quantity": 3,
                                                    "productInfo": {
                                                    "productID": "0903343"
                                                    }
                                                },
                                                {
                                                    "quantity": 5,
                                                    "productInfo": {
                                                    "productID": "WB2211"
                                                    }
                                                },
                                                {
                                                    "quantity": 2,
                                                    "productInfo": {
                                                    "productID": "CSIC2018"
                                                    }
                                                }
                                                ]
                                                }
                                            });

                                            //Location tracking

                                             // Visitor searches by location

                                            window.dataLayer.push({
                                                "event": "Location Search",
                                                "store": {
                                                        "storeZip": 10017,
                                                    }
                                                });

                                            // Visitor uses the filters feature

                                            window.dataLayer.push({
                                                "event": "Facet Selection",
                                                "store": {
                                                        "storeZip": 10017,
                                                    },
                                                 "facetHeader":"Service",
                                                 "facetFilters":"Prescription Home Delivery;ATM;24Hr Pharmacy",   

                                                 "facetHeader":"Store Type",
                                                 "facetFilters":" ",   

                                                 "facetHeader":"Store Type",
                                                 "facetFilters":" ",  



                                                "filter": {
                                                    "filtersSelected": "Service: Prescription Home Delivery;ATM;24Hr Pharmacy | Photo: One Hour Photo Lab | Specialty: Fresh Day Cafe;Beer;Food Mart | Immunization: Influenza;Shingles | StoreType: RediClinic"
                                                }    
                                                });

                                            //Error tracking module

                                             // Visitor gets an error

                                             window.dataLayer.push({
                                                "event": "Error Tracked",
                                                "error": {
                                                        "errorMessage": "error message is displayed",
                                                        "formName" : "web:form:pharmacy-signup",
                                                        "prescriptionNumber": "prescription1"
                                                    }
                                                });

                    //From tracking module
                    // Visitor starts filling out a form - step 1

                        window.dataLayer.push({
                        "event": "Form Start",
                        "form": {
                                "name": "form-name",
                                "type": "sign-up"
                                "formPage" : "step1" // for multiple page form                           
                            }
                        });

                        // Visitor continues filling out a form - step 2

                        window.dataLayer.push({
                            "event": "Form Start",
                            "form": {
                                    "name": "form-name",
                                    "type": "sign-up"
                                    "formPage" : "step2" // for multiple page form    
                                }
                            });

                        // Visitor completes a form

                        window.dataLayer.push({
                            "event": "Form Complete",
                            "form": {
                                    "name": "form-name",
                                    "type": "sign-up"
                                    "questionSelected" : "first pet name | first place travelled | anniversary month"                            
                                }
                            });

                        // Visitor cancels a form

                        window.dataLayer.push({
                            "event": "Form Cancelled",
                            "form": {
                                    "name": "form-name",
                                    "type": "sign-up"
                                    "abandonedField": "email-id"                            
                                }
                            });
                            
                        // Visitor is using the login feature

                        window.dataLayer.push({
                            "event": "Form Start",
                            "form": {
                                    "name": "form-name",
                                    "type": "login"                            
                                }
                            });

                            window.dataLayer.push({
                                "event": "Form Complete",
                                "form": {
                                        "name": "form-name",
                                        "type": "login"                          
                                    },
                                "user":{
                                        "userName":"ABCDEDFER",//set to the username 
                                        "isPharmacyUser":true, // false
                                        "wellnessID":544343434, // set to the wellness number 
                                        "wellnessTier": "bronze", //gold, silver, platinum
                                        "refillPrescriptions": 2, // number of prescriptions eligible for refill
                                        "bonusCash": 5 // number of prescriptions eligible for refill
                                    }
                                });
                            
                        // Visitor is clicking on submit refill order button

                        window.dataLayer.push({
                            "event": "Refill Prescription",
                            "prescription": {
                                    "label": "prescription 1 | prescription 2 | prescription 3",
                                    "count": 3                            
                                }
                            });

                        // Visitor is clicking on transfer refill button

                        window.dataLayer.push({
                            "event": "Transfer Prescription",
                            "prescription": {
                                    "label": "prescription 1 | prescription 2",
                                    "count": 2                            
                                }
                            });
                        
                        // Visitor is clicking on the banner

                        window.dataLayer.push({
                            "event": "Banner Interaction",
                            "banner": {
                                    "location": "header",
                                    "name": "signup|wellness+banner"                            
                                }
                            }); 
                            
                        // Visitor is clicking on one of the tabs in manage prescription screen

                        window.dataLayer.push({
                            "event": "Manage Prescription",
                            "prescription": {
                                    "selection": "recent",                  
                                }
                            });  
                       
                        // Visitor is using the login feature

                        window.dataLayer.push({
                            "event": "Right Rail Tap",
                            "element": {
                                    "linkTap": "find-a-store",                   
                                }
                            });

                        
                        // Visitor is clicking on the Right Rail elements

                        window.dataLayer.push({
                            "event": "Right Rail Tap",
                            "element": {
                                    "type": "banner",
                                    "text": "transfer and earn $100"                   
                                }
                            });

                        // Visitor is clicking on the drop down feature in home page

                        window.dataLayer.push({
                            "event": "Home Banner",
                            "element": {
                                    "type": "drop down",
                                    "text": "long term health"                   
                                }
                            });

                         
                        // Visitor is viewing an article

                        window.dataLayer.push({
                            "event": "Article view",
                            "element": {
                                    "type": "article",
                                },
                            "article": {
                                "type": "article",
                                "title": "managing type 2 diabetes",
                                "category": "wellness + articles",
                            },    
                         }); 

                         // Visitor is clicking an article in the two column location

                        window.dataLayer.push({
                            "event": "Location Tracking",
                            "element": {
                                    "type": "hero column", 
                                },
                            "location": {
                                "type": "hero column",
                                "position": "left",
                                "linkName": "view full directory of savings",
                            },    
                         }); 

                         // Visitor is clicking an article in the just for you location

                        window.dataLayer.push({
                            "event": "Location Tracking",
                            "element": {
                                    "type": "just for you column", 
                                },
                            "location": {
                                "type": "just for you column",
                                "position": "top middle", 
                                //top left, top right, bottom left, bottom middle, bottom right
                                    "linkName": "guide to supermodel beauty",
                            },    
                         }); 

                         // Visitor is using the facet feature

                        window.dataLayer.push({
                            "event": "Facet Tracking",
                            "facet": {
                                    "domain": "locations", 
                                    "category": "service | photo | specialty",
                                    "attributes" : "prescription home delivery | lottery machine | blue rhino"                   
                                }
                            });

                            window.dataLayer.push({
                                "event": "Facet Tracking",
                                "facet": {
                                        "domain": "internal search", 
                                        "category": "price | brand | available",
                                        "attributes" : "$0 - $10 | drive medical | in store only"                   
                                    }
                                });
                                           

                                            // Data Attributes Table

                                            <button class="search-type-toggle-button js-search-type-toggle search-by-location" data-analytics="search by location" disabled="" onclick="FLOOD('store002');"><span class="search-type-toggle-text">Search by Location</span></button>
                    
                                    
                                            // Search Tracking

                                            window.dataLayer.push({
                                                "event":"Search Tracking",
                                                "search":{
                                                    "searchTerm": "medicines",
                                                    "searchCount": 40,
                                                    "searchType" : "shop"
                                                    }
                                                });
                                    
                                            // Search Popup Tracking

                                            window.dataLayer.push({
                                                "event":"Search Suggestion",
                                                "search":{
                                                    "searchTerm": "medicines"
                                                    }
                                                });

                                            // Product is removed

                                            window.dataLayer.push({
                                                "event":"Product Removed",
                                                "product":[
                                                    {
                                                        "quantity": 1,
                                                        "sellingPrice": 10.87,
                                                            "productInfo":{
                                                                "productID":"0411910",
                                                                "productName":"Glad Strong Quick Tie Large Trash Bags",
                                                                "sku": "0411910"
                                                            }
                                                    }
                                                    ]
                                                });

                                            // Product Remove Direct Call 

                                            _satellite.track("cart remove",
                                                {
                                                    product:
                                                        {
                                                                    productName:"Glad Strong Quick Tie Large Trash Bags",
                                                                    productID: "0411910",
                                                                    sku: "0411910",
                                                                    unitPrice:10.87,
                                                                    quantity:1,
                                                        },
                                                            location:"minicart" // standard remove
                                                    }
                                             )
                                            
                                          