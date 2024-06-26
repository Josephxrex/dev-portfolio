/* eslint-disable react/jsx-pascal-case */

import config from '../config/index.json';
import OrbitingCircles from './magicui/orbiting-circles';
import { IconProps } from "@radix-ui/react-icons/dist/types";
import josephImage from '../assets/images/josepxrex.jpg'
import WordRotateDemo from './WordRotateDemo';


const MainHero = () => {
    const { mainHero } = config;

    const Icons = {
      gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
          <path
            fill="currentColor"
            d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
          ></path>
        </svg>
      ),
      notion: (props: IconProps) => (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2500/svg"
          {...props}
        >
          <path
            d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
            fill="#000"
          />
        </svg>
      ),
      awsLambda:(props: IconProps)=>(  
      <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#FA7E14" d="M7.983 8.37c-.053.073-.098.133-.141.194L5.775 11.5c-.64.91-1.282 1.82-1.924 2.73a.128.128 0 01-.092.051c-.906-.007-1.813-.017-2.719-.028-.01 0-.02-.003-.04-.006a.455.455 0 01.025-.053 13977.496 13977.496 0 015.446-8.146c.092-.138.188-.273.275-.413a.165.165 0 00.018-.124c-.167-.515-.338-1.03-.508-1.543-.073-.22-.15-.44-.218-.66-.022-.072-.059-.094-.134-.093-.57.002-1.136.001-1.704.001-.108 0-.108 0-.108-.103 0-.674 0-1.347-.002-2.021 0-.075.026-.092.099-.092 1.143.002 2.286.002 3.43 0a.113.113 0 01.076.017.107.107 0 01.045.061 18266.184 18266.184 0 003.92 9.51c.218.53.438 1.059.654 1.59.026.064.053.076.12.056.6-.178 1.2-.352 1.8-.531.075-.023.102-.008.126.064.204.62.412 1.239.62 1.858l.02.073c-.043.015-.083.032-.124.043l-4.085 1.25c-.065.02-.085 0-.106-.054l-1.25-3.048-1.226-2.984-.183-.449c-.01-.026-.023-.048-.043-.087z"/></svg>
      ),
      azure:(props :IconProps)=>(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221">
      <path d="M128 0l108 188H20L128 0z" fill="#0072C6"/>
      <path d="M128 0v188h108L128 0z" fill="#008AD7"/>
      <path d="M58 220l70-129 68 129H58z" fill="#3C8DBC"/>
      </svg>
      ),
      aws: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 272">
          <path d="M128 0l118 68v136l-118 68L10 204V68L128 0z" fill="#FF9900"/>
          <path d="M128 0v272l118-68V68L128 0z" fill="#FF6600"/>
          <path d="M128 26l108 62v96L128 246l-108-62V88l108-62z" fill="#FFCC00"/>
          <path d="M128 26v220l108-62V88L128 26z" fill="#FF9900"/>
        </svg>
      ),
      jira: (props: IconProps) => (
        <svg width="1000px" height="1000px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.6647 15.2165L17.2075 3.1679L16 2L6.62269 11.0697L2.33526 15.2165C1.88825 15.6494 1.88825 16.3506 2.33526 16.7835L10.9025 25.0697L16 30L25.3773 20.9303L25.5225 20.7899L29.6647 16.7835C30.1118 16.3506 30.1118 15.6494 29.6647 15.2165ZM16 20.1394L11.7202 16L16 11.8606L20.2798 16L16 20.1394Z" fill="#2684FF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 11.8606C13.1979 9.15007 13.1842 4.75994 15.9694 2.0332L6.60352 11.0881L11.701 16.0184L15.9999 11.8606Z" fill="url(#paint0_linear_87_7658)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2912 15.9888L16 20.1392C17.3525 21.4466 18.1124 23.2202 18.1124 25.0695C18.1124 26.9189 17.3525 28.6925 16 29.9999L25.3888 20.9191L20.2912 15.9888Z" fill="url(#paint1_linear_87_7658)"/>
        <defs>
        <linearGradient id="paint0_linear_87_7658" x1="15.2357" y1="7.67312" x2="8.09646" y2="10.7902" gradientUnits="userSpaceOnUse">
        <stop offset="0.18" stop-color="#0052CC"/>
        <stop offset="1" stop-color="#2684FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_87_7658" x1="16.8177" y1="24.2786" x2="23.9441" y2="21.1836" gradientUnits="userSpaceOnUse">
        <stop offset="0.18" stop-color="#0052CC"/>
        <stop offset="1" stop-color="#2684FF"/>
        </linearGradient>
        </defs>
        </svg>
      ),
      ts: (props: IconProps) => (
        <svg width="100px" height="100px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z" fill="#121923"/>
        </svg>
      ),
  }

  
    return (
        <div className="relative flex h-screen w-full  items-center justify-center  ">
            <img  className='h-[500px] opacity-60' src={josephImage} alt="Joseph'simage" />
            <span className=" flex flex-col absolute z-1 bottom-[20%] md:bottom-[25%]  max-w-[32rem] whitespace-pre-wrap bg-clip-text text-center text-9xl font-abc leading-none ">
            {mainHero.title}
            <WordRotateDemo text={mainHero.rol}/>
            </span>
        
            {/* Azure Circles */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={450}
            ><Icons.azure/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                delay={10}
                radius={450}
            ><Icons.awsLambda/>
            </OrbitingCircles>

            {/* Notion Circles */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={350}
            >
            <Icons.notion />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                delay={10}
                radius={350}
            >
            <Icons.ts/>
            </OrbitingCircles>
        
            {/* Github Circles */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={250}
            >
                <Icons.jira/>
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={250}
                duration={10}
                delay={20}
            >
                <Icons.gitHub />
            </OrbitingCircles>
        </div>
    );
  };
  export default MainHero;