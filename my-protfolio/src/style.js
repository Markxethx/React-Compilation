const styles = {
    title : "font-poppins leading-[70px] font-semibold non-italic text-[64px]",
    paragraph : "font-poppins non-italic text-lg tracking-wider",
    text: "font-poppins non-italic font-bold  text-[18px] dim-light",
    paddingText: "lg:mb-[20px] md:mb-[10px] mb-3",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween : "flex justify-between items-center",

    navbar : "font-poppins non-italic font-semibold leading-6 text-[18px]",
    paddingX: "sm:px-14",
    paddingY: "sm:py-16 py-6",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
}

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles;
