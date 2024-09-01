/* eslint-disable react/prop-types */

export default function RelatedBlogItem({ blog }) {
    const { title, image, tags, date } = blog
    return (
        <div className="rounded-md shadow-md">
            <div style={{ backgroundImage: `url(${image})` }} className="md:h-[160px] xl:h-[200px] bg-cover bg-center"></div>
            <div className="p-[14px]">
                <p className="text-[18px] font-bold">{title}</p>
                <p className="text-[16px]">
                    {tags && tags.map((tag) => `#${tag}`).join(', ')}
                </p>
                <p className="text-[16px] font-medium">{date}</p>
            </div>
        </div>
    )
}
