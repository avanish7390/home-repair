import Image from "next/image"

function CategoryList({categoryList}) {
  return (
    <div>
       {categoryList.map((category,index)=> (
        <div>
            <Image src={category.icon.url}
            alt="icon"
            width={35}
            height={35}/>
        </div>
       ))}
    </div>
  )
}

export default CategoryList
