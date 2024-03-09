'use client'
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";
import CategoryList from "./_components/CategoryList";
import Hero from "./_components/Hero";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {
  const [categoryList,setCategoryList]=useState([]);
  const [businessLists,setBusinessList]=useState([]);
  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();

  },[])
  /**
   * Used to get all Category LIst
   */
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }

  /**
   * Use to get All Business List
   */

  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists)
    })

  }
  return (
   <div>
    <Hero/>

    <CategoryList categoryList={categoryList}/>    
    <BusinessList businessList={businessLists}
    title={'Popular Business'}/>
   </div>
  );
}
