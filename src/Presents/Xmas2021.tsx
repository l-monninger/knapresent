import { motion } from 'framer-motion';
import React, {FC, ReactElement} from 'react';
import { Card } from 'react-bootstrap';

export type Xmas2021Props = {}

export const Xmas2021 : FC<Xmas2021Props>  = () =>{

    return (

        <div style={{
            width : "100vw",
            height : "100vh",
            background : "#014421",
            position : "relative",
            display : 'grid',
            justifyContent :"center",
            justifyItems : "center"
        }}>
             <img 
                style={{
                    zIndex : 1,
                    position : "absolute",
                    height : "40%",
                    right : "10px",
                    bottom : "5%"
                }}
            src="https://pngimg.com/uploads/christmas_tree/christmas_tree_PNG80.png"/>
            <motion.div 
            style={{
                zIndex : 100,
                position : "absolute",
                left : "25%",
                width : "50%",
                top : "40%"
            }}
            transition={{
                duration : 4.5
            }}
            animate={{
                opacity : [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0]
            }}>
                <motion.div 
                transition={{
                    duration : .5
                }}
                animate={{
                    transform : ["translateY(-10%)", "translateY(0)"]
                }}>
                    <img style={{
                        filter : "sepia(20%)",
                        width : "100%"
                    }} src={`https://i.pinimg.com/originals/7d/b3/24/7db324ed27acf79d21e3a3132287623c.gif?dummy=${new Date()}`} />
                </motion.div>
            </motion.div>
            <motion.div 
             style={{
                zIndex : 100,
                position : "absolute",
                left : "10%",
                width : "80%",
                top : "20%",
                display : "grid",
                justifyContent : "center",
                justifyItems : "center"
            }}
            transition={{
                duration : 4.5
            }}
            animate={{
                opacity : [0, 0, 0, 0, 0, 0, 0, 1.0]
            }}>
               <motion.div 
               style={{
                zIndex : 100,
               }}
               animate={{
                   rotate : [0, 0, 0, 0, 2, -2, 0, 0, 0, 0]               
                }}
                transition={{
                    duration : 2,
                    repeat : Infinity,
                    ease  : "linear"
                }}>
                <Card style={{
                        zIndex : 100,
                        background : "white",
                        width : "100%",
                        padding : "10px"
                    }}>
                        <Card.Img src="https://media.istockphoto.com/photos/hawaiian-outrigger-canoe-at-kamakahonu-beach-kailuakona-big-island-picture-id1222627817?k=20&m=1222627817&s=612x612&w=0&h=vfwJkhpBbvstOHv9maeU0lEnsBjXbad1xndpBANCOkI="/>
                        <br/>
                        <br/>
                        <a 
                        style={{
                            fontSize : "18px",
                        }}
                        href="https://www.united.com/en/US/manageres/tripdetails/%2FnfQuL88HJvn6Xbmle6MrzjO0lb6wXWAQqkjplKV%2Bix8m1RmlOw3tndvNwIw2JrbjddS4Va5gLfEmEZaBAihApEWzIiQXD6d%2FD%2FepuOOy%2FIyxwisp5zNW3FZfbdU4Abh/BookingConfirmationEmail">
                        Picture you and me on a beach...</a>
                        <br/>
                        <br/>
                    </Card>
               </motion.div>
            </motion.div>
        </div>

    )

}