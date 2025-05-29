export default function BtnOrder({ status = 0, start_date = 0 }: CardBtnHomeProps) {

  let styleBtnLeft = { borderBottomLeftRadius: '40px', borderBottomRightRadius: '50px', borderTopRightRadius: '50px' };

  let now = Date.now();
  let timeForStart = "";
  let isInit = false;
  let timeDiff = start_date - now;

  if (timeDiff > 0) {
    let hours = Math.floor(timeDiff / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    timeForStart = `${hours}h ${minutes}m left`;
  } else {
    isInit = true;
  }

  return (
    status == 1 ?
      <button disabled={!isInit} onClick={() => console.log("Navegar")} style={styleBtnLeft} className={`${!isInit ? 'text-white' : 'bg-bego'} border-none outline-none px-8 py-4 text-xs font-semibold cursor-pointer`}>
        {!isInit ?
          <> Start pickup in <span className="text-bego">{timeForStart}</span> </> :
          'Navegar'
        }
      </button> :
      <button style={styleBtnLeft} className="bg-bego border-none outline-none px-8 py-4 text-xs font-semibold cursor-pointer">Its time for pickup</button>
  );
}