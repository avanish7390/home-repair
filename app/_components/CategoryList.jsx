import Image from "next/image"

function CategoryList({CategoryList}) {
  return (
    <div>
       {CategoryList.map((category,index)=> (
        <div>
            <Image src={category.image.url}
            alt="icon"
            width={35}
            height={35}/>
        </div>
       ))}
    </div>
  )
}

export default CategoryList
