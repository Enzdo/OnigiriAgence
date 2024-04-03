



export default function CardCompetence(props) {
  const { titre, description, emoji } = props.data; 

  return(
    <div className="lg:max-w-sm w-full p-6 transition-all hover:scale-105 bg-white border border-gray-200 rounded-lg shadow-lg  flex flex-col gap-y-4 ">
                 <p className='md:text-6xl text-4xl bg-white shadow-lg rounded-2xl p-4 w-fit'>{emoji}</p>
                  <a href="#">
                      <h5 className="mb-2 md:text-2xl text-lg font-semibold tracking-tight text-gray-900 pt-4 ">{titre}</h5>
                  </a>
                  <p className="mb-3 font-normal md:text-base text-xs text-gray-500">{description}</p>
                  <a href="#" className="inline-flex w-fit font-medium items-center border-[#707070] border-2 rounded-xl md:p-2 p-1  hover:underline">
                      
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.38778 17.1021L17.3559 11.9041L16.8331 16.4321C16.821 16.537 16.8298 16.6434 16.8588 16.745C16.8878 16.8467 16.9365 16.9417 17.0022 17.0246C17.1348 17.1921 17.3282 17.3001 17.54 17.3249C17.7518 17.3498 17.9646 17.2894 18.1315 17.1571C18.2985 17.0247 18.4059 16.8313 18.4302 16.6194L19.1528 10.3862C19.1544 10.3393 19.1526 10.2923 19.1473 10.2457C19.1254 10.212 19.1458 10.1699 19.1372 10.1274C19.1173 10.0303 19.0796 9.93771 19.0261 9.85425C18.9713 9.77161 18.9017 9.69979 18.8208 9.64242C18.7989 9.60874 18.7521 9.61045 18.7167 9.58553C18.6761 9.56193 18.6339 9.54134 18.5903 9.52393L12.5944 7.67357C12.4816 7.63874 12.3626 7.62919 12.2459 7.6456C12.1291 7.66202 12.0175 7.70399 11.9189 7.76854C11.7617 7.87064 11.6453 8.0247 11.59 8.20398C11.5588 8.30491 11.5479 8.41104 11.5578 8.51631C11.5677 8.62157 11.5983 8.7239 11.6477 8.81742C11.6971 8.91094 11.7645 8.99383 11.8459 9.06132C11.9274 9.12882 12.0213 9.17961 12.1222 9.21077L16.477 10.5568L8.50889 15.7549C8.33071 15.8711 8.20612 16.0536 8.16253 16.2621C8.11895 16.4706 8.15994 16.6881 8.27649 16.8668C8.39304 17.0454 8.57559 17.1706 8.784 17.2147C8.99241 17.2589 9.20959 17.2184 9.38778 17.1021Z" fill="#131629"/>
                    </svg>

                  </a>
              </div>
  );
}
