'use client'
import { useEffect, useState } from "react";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();

  },[])
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }
  return (
   <div>
    <Hero/>

    <CategoryList categoryList={categoryList}/>    
   </div>
  );
}
