
function CardImg({title,description,img,footerHtml}) {
     return (
          <div className="flex flex-col p-3 w-full rounded-lg shadow-lg bg-white mt-3 border-[1px] border-zinc-300 max-w-[300px]" >
               <img src={img} alt="" className="w-full object-cover rounded-lg" />
               <div className="flex flex-col p-1">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-xs text-zinc-400">{description}</p>
               </div>
               <div className="flex justify-between border-t-[1px] border-dashed border-zinc-200 pt-2 mt-2">
                    {footerHtml}
               </div>
          </div>
     );
}

export default CardImg;