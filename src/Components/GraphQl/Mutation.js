import { gql } from "@apollo/client";

const ADD_TO_SHOPPING_CART=gql`
mutation MyMutation($foodName:String!, $foodPrice:String!, $foodQuantity:String! ,) {
    createShopingCart(
    data: {foodName: "", foodPrice: 1.5, foodQuantity: 10, 
    foodImage: {create: {uploadUrl: ""}}}
  )
}`