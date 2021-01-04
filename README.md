# Sixpence-etsy-clone
**Welcome to the Sixpence wiki!**

In order to login to the Sixpence application, please use the Demo-User credentials below or register and create a username and password.

Demo-User Credentials:
  1. username: 'Demo-lition'
  2. email: demo@user.io
  3. password: password
  
  Sixpence is a clone of Etsy with a wedding essentials twist. This application is targeted toward non-sentimental people that want to sell their gently used items   and people planning their wedding interested in buying these gently used items at a discounted price. The features used in the implementation of this app include:   product listing, single product listing, create a product listing, add to cart, delete from cart, and search for a product listing.

**Features List:**
- Product Listings
   1. A logged-in user should be able to create a product listing
   2. Both logged-in and logged-out users should be able to view product listings.
  
- Shopping Cart
   1. A logged in user should be able to add an item to their shopping cart.
   2. A logged out user should be asked to sign in or register if attempting to add an item to the shopping cart.
   3. A logged in user should be able to delete any item in their shopping cart.

-Search
   1. All users whether logged in or logged out are allowed to create a search.
   2. The search feature queries all product listings for the search requested.
   3. The user can update their search by typing in a new listing into the search bar and querying a new set of product lists.
   4. Clicking on a link to another feature or doing a new search will change the queried view.




**Database Schema**
1. Users
    - username
    - email
    - hashed password
2. Product Listings
    - userId(a user can create a product listing)
    - title
    - description
    - image
    - price
3. Cart
    - buyerId
    - title
    - image
    - price
   


**Design References**

![Landing page for Etsy](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-unx1hzefzPmp6MOpX62-zsAZG9mqYuHZA&usqp=CAU)

This is the landing page for the Etsy app. I have implemented a similar Navbar, containg a functioning search feature at the top using query functions, a shopping cart in the right hand corner, and the product list feed.

