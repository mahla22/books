import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
function Quotes() {
    const quotes = [
        {
            image : "/shekspir.webp",
            text: "آرام و هوشمندانه. آنان که سریع می دوند، سکندری می خورند.",
            author: "ویلیام شکسپیر"
        },
        {
            image : "/mother-treza.webp",
            text: "اگر درباره مردم قضاوت کنید، دیگر فرصتی برای دوست داشتن آنها ندارید.",
            author: "مادر ترزا"
        },
        {
            image :"/malcom-x.webp",
            text:"آینده متعلق به کسانی است که امروز خود را برای آن آماده می کنند.",
            author:"مالکوم ایکس"
        },
        {
            image : "/mark-tuin.webp",
            text: "هر وقت خود را در میان اکثریت دیدید، وقت آن رسیده است که مکث کنید و تأمل کنید",
            author: "مارک تواین",
        },
        {
            image : "/booda.webp",
            text:"ما نتیجه اندیشه‌مان هستیم.",
            author:"بودا"
        },
        {
            image : "cocochannel.webp",
            text:"هنوز هم شجاعانه ترین کار این است که خودتان فکر کنید. آن هم با صدای بلند.ما نتیجه اندیشه‌مان هستیم.",
            author:"کوکو شنل"
        },
        {
            image : "/anestine.webp",
            text:"جنون یعنی تکرار مداوم یک کار و انتظار کشیدن برای نتایج متفاوت.",
            author:"آلبرت انیشتین"
        },
        {
            image : "/aflatoon.webp",
            text: "بزرگترین ثروت این است که بتوانید با چیزهای کوچک راضی و قانع زندگی کنید.",
            author:"افلاطون"
        },
        {
            image : "/brusli.webp",
           text: "جنگجوی موفق انسان متوسطی است که مثل لیزر تمرکز می کند.",
           author:"بروس لی"
        },
        {
            image : "/john-f-kenedi.webp",
            text:  "کسانی که جرئت شکست های ناگوار را دارند، کسانی هستند که به موفقیت های بزرگ دست پیدا می کنند.",
            author:" جان اف کندی"
         }
       

    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(i => (i + 1) % quotes.length)
        }, 6000);

        return () => clearInterval(intervalId);
    }
        ,[])
    return(
        

        <motion.div
            className="quotes"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <h4>سخن بزرگان</h4>
            <img
                src={quotes[index].image}
                alt="نویسنده متن"
                style={{width: "70px", height: "70px", borderRadius: "50%", float:"right",marginTop:"20px", marginLeft:"20px" }}
            />
            <motion.p      
                style={{ fontSize: "1rem", direction: "rtl", color:'rgb(133, 54, 9)', marginTop:"20px"}}
            >
                {quotes[index].text}
            </motion.p>

            <motion.p
                style={{ fontSize: "1rem", direction: "rtl" ,color:'rgb(134, 55, 6)', marginTop:"10px" }}
            >
                -{quotes[index].author}
            </motion.p>
        </motion.div>
    );
}
export default Quotes;