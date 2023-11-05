export default function Individual({photo,name,position}) {
  return (
    <div className="flex flex-col items-center space-y-20">
      <div>
        <img src={photo} className="h-20 rounded-full" />
      </div>
      <p className="text-sm text-[#5a636c] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        suscipit magni iure dicta, iusto adipisci, natus eum in illo minima
        doloribus omnis cupiditate.
      </p>
      <div className="flex flex-col space-y-3">
        <p className="font-secondary font-black text-[#23303e] text-center">{name}</p>
        <p className="text-xs text-[#a7abae]">{position}</p>
      </div>
    </div>
  );
}
