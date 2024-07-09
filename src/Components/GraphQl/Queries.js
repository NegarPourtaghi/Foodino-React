import { gql } from "@apollo/client";

const GET_ALL_POSTS_3= gql`
    query newone($skip: Int) {
        foods(first:100){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
   foodsConnection(first: 3 , skip: $skip) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
    edges {
      node {
        foodPrice
     foodName
     foodSlug
     foodDetails,
     id
     foodImage {
       url
     }
      }
    }
  }
  }`

const GET_ALL_POSTS= gql`
    query newone($skip: Int) {
        foods(first:100){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
   foodsConnection(first: 3 , skip: $skip) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
    edges {
      node {
        foodPrice
     foodName
     foodSlug
     foodDetails,
     id
     foodImage {
       url
     }
      }
    }
  }
  }`


const GET_FOOD_DETAIL=gql`
query GetFoodInfo($slug:String!) {
        foods(where:{foodSlug:$slug} ) {
     foodPrice
     foodName
     foodSlug
     foodDetails,
     id
     foodImage {
       url
     }
   }
}`

const GET_PASTA=gql`
query  {
        foods(where:{sort:Pasta}){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
}
`

const GET_PIZZA=gql`
query  {
        foods(where:{sort:Pizza}){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
}
`


const GET_Drinks=gql`
query  {
        foods(where:{sort:Drink}){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
}
`
const GET_Dessert=gql`
query  {
        foods(where:{sort:Dessert}){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
}
`
const GET_Sandwich=gql`
query  {
        foods(where:{sort:Sandwich}){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
}
`

const GET_Appetizer=gql`
query  {
        foods(where:{sort:Appetizer}){ 
     foodPrice
     foodName
     foodSlug
     sort
     foodDetails,
     id
     foodImage {
       url
     }
   }
}
`

export {GET_ALL_POSTS_3,GET_ALL_POSTS, GET_FOOD_DETAIL, GET_PIZZA, GET_PASTA, GET_Sandwich,GET_Dessert, GET_Drinks, GET_Appetizer}


// 