import { Box, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const ServicesBox = styled(Box)(({ theme }) => ({
    transition: ".4s all",
    boxShadow: "rgba(253, 130, 22, 0.258) 0px 2px 8px",
    display: "grid",
    justifycontent: "center",
    alignItems: "center",
    width: "80%",
    height: "180px",
    borderRadius: "12px",
  
    [theme.breakpoints.down("sm")]: {
        width:"100px",
        height:"100px"
    },
  }));

  const ServicesTitle = styled(Typography)(({ theme }) => ({
    color:"#ef9458",
    fontSize:"1.2rem",
  
    [theme.breakpoints.down("sm")]: {
        fontSize:"0.6rem"
    },
  }));

  const SliderBox = styled(Box)(({ theme }) => ({
    height:"500px",
    [theme.breakpoints.down("md")]: {
        height:"300px"
    },
    [theme.breakpoints.down("sm")]: {
        height:"200px"
    },
  }));
 
  const SliderPagination=styled(Box)(({theme})=>({
    backgroundColor:"#d8d8d891",
     padding:"8px",
     borderRadius:"12px", 
     width:"fit-content",
     left:"45%",
     [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("sm")]: {
    },
  }));

  const Heading=styled(Typography)(({theme}) =>({
    fontSize:"2.2rem",
textAlign:"center",
 margin:"50px 0px",
  color:"#1e1e1e",

  [theme.breakpoints.down("md")]:{
    fontSize:"1.6rem"

  },
  [theme.breakpoints.down("sm")]:{
    fontSize:"1.4rem"

  }
  }));

  const FoodTitle=styled(Typography)(({theme}) =>({
    fontSize:"1.4rem",
  color:"#1e1e1e",

  [theme.breakpoints.down("md")]:{
    fontSize:"1.2rem"

  },
  [theme.breakpoints.down("sm")]:{
    fontSize:"1rem"

  }
  }));
     
  const FoodDetailsTitle=styled(Typography)(({theme}) => ({
    fontSize:"2.4rem",
  color:"#1e1e1e",

  [theme.breakpoints.down("md")]:{
    fontSize:"2rem"

  },
  [theme.breakpoints.down("sm")]:{
    fontSize:"1.6rem"

  }
  }));

  const HeaderTitle=styled(Typography)(({theme}) => ({
    fontSize:"2.4rem",
    color:"#fff",
    textAlign:"center",

  [theme.breakpoints.down("md")]:{
    fontSize:"2rem"

  },
  [theme.breakpoints.down("sm")]:{
    fontSize:"1.6rem"

  }
  }));

  const ShoppingCartTitle=styled(Typography)(({theme}) =>({
    fontSize:"2rem",
    color:"#1e1e1e",

 [theme.breakpoints.down("md")]:{
    fontSize:"1.4rem",
 },
 [theme.breakpoints.down("sm")]:{
    fontSize:".8rem" },
  }));
    const FoodinoBoxTitle=styled(Typography)(({theme}) => ({
        fontSize:"2rem",
        color:"#fff",
        [theme.breakpoints.down("md")]:{
            fontSize:"1.5rem"
        }

    }))

    const FoodinoBoxText=styled(Typography)(({theme}) => ({
        fontSize:"1rem",
        color:"#fff",
        textAlign:"justify",
        [theme.breakpoints.down("md")]:{
            fontSize:".8rem",
        }   }))

        const FoodinoBoxIconTitle=styled(Typography)(({theme}) => ({
            fontSize:"1rem",
            color:"#fff",
            textAlign:"center",
            [theme.breakpoints.down("md")]:{
                fontSize:".8rem",
            },
            [theme.breakpoints.down("sm")]:{
                fontSize:".6rem",
            }
    
        }))

        const FoodinoBranchesTitle=styled(Typography)(({theme}) => ({
            fontSize:"1rem",
            color:"#1e1e1e",
            marginBottom:"10px",
            marginTop:"10px",
            [theme.breakpoints.down("md")]:{
                fontSize:".8rem",
            }   }))

            const BranchesTitle=styled(Typography)(({theme}) =>({
                fontSize:"2.2rem",
                color:"#1e1e1e",
                [theme.breakpoints.down("md")]:{
                    fontSize:"1.4rem"
                },
                [theme.breakpoints.down("sm")]:{
                    fontSize:"1.1rem"
                },
            }))

            const BranchesText=styled(Typography)(({theme}) =>({
                fontSize:"1rem",
                color:"#1e1e1e",
                [theme.breakpoints.down("md")]:{
                    fontSize:".8rem"
                },
                [theme.breakpoints.down("sm")]:{
                    fontSize:".7rem",
                },
            }))
             
            const Paragraph=styled(Typography)(({theme}) =>({
                fontSize:"1.4rem",
                color:"#1e1e1e",
                textAlign:"justify",
                [theme.breakpoints.down("md")]:{
                    fontSize:"1rem",

                },
                [theme.breakpoints.down("sm")]:{
                    fontSize:".9rem",

                }

            }))
            const ContactBox=styled(Box)(({theme}) => ({
                marginTop:"50px",
                width:"50%",
                display:"grid",
                justifyContent:"center",
                borderRadius:" 12px",  
                padding: "40px", 
                transition:".5s all",
                boxShadow: "1px 2px 8px 2px #b4b4b452",
                // ':hover:{boxShadow:"1px 4px 8px 2px #a8a6a660",
                    [theme.breakpoints.down("md")]:{
                        width:"66%"
    
                    },
                    [theme.breakpoints.down("sm")]:{
                        width:"70%",
                        padding: "16px",
    
                    }
            }));

            
            const CardMediaBox=styled(CardMedia)(({theme}) =>({
                width:"100%",
                height:"100%",
                borderTopLeftRadius:"12px",
                borderBottomLeftRadius:"12px",
                [theme.breakpoints.down("sm")]:{
                borderTopLeftRadius:"12px",
                borderTopRightRadius:"12px",
                borderBottomLeftRadius:"0px",


                }

            }))
            const ContactTitle=styled(Typography)(({theme}) => ({
                fontSize:"2rem",
                textAlign:"center",
                color:"#1e1e1e",
                marginBottom:"30px",
                [theme.breakpoints.down("md")]:{
                    fontSize:"1.4rem"
                },
                [theme.breakpoints.down("sm")]:{
                    fontSize:"1.2rem"
                }
            }))
  export {BranchesTitle,ContactTitle,ContactBox,CardMediaBox,Paragraph,BranchesText, FoodinoBranchesTitle,FoodinoBoxIconTitle,FoodinoBoxText,FoodinoBoxTitle,ShoppingCartTitle,ServicesBox, ServicesTitle, SliderBox, SliderPagination, Heading, FoodTitle, FoodDetailsTitle, HeaderTitle}