import { useContext } from "react";
import { LanguageContext, ProvinceData } from "../../App";
import { useMediaQuery } from "react-responsive";
import Content from "./Content";
const HightlightList = () => {
  const language = useContext(LanguageContext);
  const provinceData = useContext(ProvinceData);
  const isSmallScreen =  useMediaQuery({ query: '(min-width: 0) and (max-width: 814px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 1200px) and (max-width: 1699px)' });
  if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
    return (
      <div className="d-flex justify-content-center ">
        <p className="mx-3">Loading</p>
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const hightlightDataBig = [
    provinceData[0][language].attraction[0],
    provinceData[1][language].attraction[0],
    provinceData[8][language].attraction[2],
    provinceData[20][language].attraction[2]
  ];
  const hightlightDataSmall = [
    provinceData[0][language].attraction[0],
    provinceData[1][language].attraction[0],
    provinceData[8][language].attraction[2],
  ];
  return (
    <> 
      {
        (isSmallScreen || isMediumScreen) ? 
          <div className="row d-md-none d-xl-inline-flex d-xxxl-none mx-auto">
            {Array.from({ length: hightlightDataSmall.length }, (_, index) => (
              <Content {...hightlightDataSmall[index]} key={hightlightDataSmall[index].id} provinceData={provinceData} />
            ))}
          </div>
        :
          <div className="row d-none d-md-inline-flex d-xl-none d-xxxl-inline-flex d-xxxl-inline-flex mx-auto">
            {Array.from({ length: hightlightDataBig.length }, (_, index) => (
              <Content {...hightlightDataBig[index]} key={hightlightDataBig[index].id} provinceData={provinceData} />
            ))}
          </div>
      }
    </>
  )
}

export default HightlightList