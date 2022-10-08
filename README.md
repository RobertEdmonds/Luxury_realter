# Luxury Beach Realtors 

## Set Up

In the terminal please run the following code to get things up and running. 
* bundle install
* rails db:migrate db:seed
* npm start --prefix client
* rails s


## Description 

This is an app for realtors to display the bear minimum for people that are not signed in. Once someone signs up the realtor is able to view the customer and have their contact information. If the realtor is logged in, they are able to update, add, and delete houses. The realtor is also able to add, update order and delete photos. Realtor can also get their profile and update any changes. A realtor that has access to the webpage are the only ones that can add another realtor to make updates or changes to the webpage. Once someone becomes a customer, they are able to update their profile, and view houses with full description.

## Features

 * The login will determine if you have an account and display different information based if you are an employee or customer.
 * Sign up is if your a potential customer and would like to view all the information on the webpage.
 * Success stories show the past sells and reviews of previous customers.
 * Buy a home not logged in
    * will show the first picture of the house and have a button that will push person to login.
* Buy a home signed in as customer
    * Customers can view the full view of houses with multiple pictures and house information.
* Buy a home as employee
    * Employee is able to make updates to the house information, add photos to specific house and change the order of the photos.
* Home displays basic information for the realtor, where they sale or list, also the background image changes every 10 seconds.
* Logged in as employee 
    * form to add houses 
    * form to add more success stories
    * form to add a new employee
    * view the list of customers
* Ability to update personal information once clicking on customer or employee name.

## Login Credentials 
* Employee 
    * email: bobbystar@gmail.com
    * password: Hello
* Customer 
    * email: holly@gmail.com
    * password: Hello

## Links 
* [Blog Link](https://medium.com/@bobby.edmonds89/automatically-updating-the-order-of-array-with-react-and-rails-8a286e6161f9)
* [Video Walk Through](https://youtu.be/VCry8n-DcKw)